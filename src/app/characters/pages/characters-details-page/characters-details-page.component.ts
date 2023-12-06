import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from '../../services/characters.service';
import { catchError, forkJoin, switchMap, tap } from 'rxjs';
import { Character } from '../../interfaces/character.interface';
import { EpisodesService } from 'src/app/episodes/services/episodes.service';
import { Episode } from 'src/app/episodes/interfaces/episodes.interface';

@Component({
  selector: 'app-characters-details-page',
  templateUrl: './characters-details-page.component.html',
  styleUrls: ['./characters-details-page.component.css'],
})
export class CharactersDetailsPageComponent implements OnInit {
  private charactersService = inject(CharactersService);
  private episodesService = inject(EpisodesService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  public character: Character = {} as Character;
  public episodes: Episode[] = [];

  ngOnInit(): void {
    this.getCharacterDetails();
  }

  getCharacterDetails() {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.charactersService.getCharacterById(id)),
        tap((character) => {
          if (!character) {
            this.router.navigate(['/characters']);
            return;
          }
          this.character = character;
        }),
        switchMap((character) => {
          if (!character) return [];
          const characterRequests = character.episode.map((characterUrl) =>
            this.episodesService.getEpisodeById(
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
      .subscribe((episode) => {
        this.episodes = episode;
      });
  }
}
