import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EpisodesService } from '../../services/episodes.service';
import { Episode } from '../../interfaces/episodes.interface';
import { catchError, forkJoin, switchMap, tap } from 'rxjs';
import { Character } from 'src/app/characters/interfaces/character.interface';
import { CharactersService } from 'src/app/characters/services/characters.service';

@Component({
  selector: 'app-episodes-details-page',
  templateUrl: './episodes-details-page.component.html',
  styleUrls: ['./episodes-details-page.component.css'],
})
export class EpisodesDetailsPageComponent implements OnInit {
  private episodesService = inject(EpisodesService);
  private charactersService = inject(CharactersService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  public episode: Episode = {} as Episode;
  public characters: Character[] = [];

  ngOnInit(): void {
    this.getEpisodeDetails();
  }

  getEpisodeDetails() {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.episodesService.getEpisodeById(id)),
        tap((episode) => {
          if (!episode) {
            this.router.navigate(['/characters']);
            return;
          }
          this.episode = episode;
        }),
        switchMap((episode) => {
          if (!episode) return [];
          const characterRequests = episode.characters.map((characterUrl) =>
            this.charactersService.getCharacterById(
              Number(characterUrl.split('/').pop()) || 0
            )
          );
          return forkJoin(characterRequests);
        }),
        catchError((error) => {
          console.error(error);
          return [];
        })
      )
      .subscribe((characters) => {
        this.characters = characters;
      });
  }
}
