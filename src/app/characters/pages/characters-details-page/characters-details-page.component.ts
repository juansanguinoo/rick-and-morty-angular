import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from '../../services/characters.service';
import { switchMap } from 'rxjs';
import { Result } from '../../interfaces/character.interface';

@Component({
  selector: 'app-characters-details-page',
  templateUrl: './characters-details-page.component.html',
  styleUrls: ['./characters-details-page.component.css'],
})
export class CharactersDetailsPageComponent implements OnInit {
  private charactersService = inject(CharactersService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  public character: Result = {} as Result;

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.charactersService.getCharacterById(id)))
      .subscribe((character) => {
        if (!character) {
          return this.router.navigate(['/characters']);
        }
        return (this.character = character);
      });
  }
}
