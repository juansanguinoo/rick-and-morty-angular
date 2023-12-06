import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationsService } from '../../services/locations.service';
import { Location } from '../../interfaces/locations.interface';
import { Result } from 'src/app/characters/interfaces/character.interface';
import { catchError, forkJoin, switchMap, tap } from 'rxjs';
import { CharactersService } from 'src/app/characters/services/characters.service';

@Component({
  selector: 'app-locations-details-page',
  templateUrl: './locations-details-page.component.html',
  styleUrls: ['./locations-details-page.component.css'],
})
export class LocationsDetailsPageComponent implements OnInit {
  private locationsService = inject(LocationsService);
  private charactersService = inject(CharactersService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  public location: Location = {} as Location;
  public characters: Result[] = [];

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.locationsService.getLocationById(id)),
        tap((location) => {
          if (!location) {
            this.router.navigate(['/characters']);
            return;
          }
          this.location = location;
        }),
        switchMap((location) => {
          if (!location) return [];
          const characterRequests = location.residents.map((characterUrl) =>
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
