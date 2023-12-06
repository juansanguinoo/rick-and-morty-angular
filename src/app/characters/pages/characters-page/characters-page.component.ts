import { Component, OnInit, inject } from '@angular/core';

import { CharactersService } from '../../services/characters.service';
import {
  ApiResponseCharacter,
  Character,
} from '../../interfaces/character.interface';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.css'],
})
export class CharactersPageComponent implements OnInit {
  private charactersService = inject(CharactersService);
  public characters: Character[] = [];
  public currentPage: number = 1;
  public nameFilter: string = '';
  public statusFilter: string = '';
  public genderFilter: string = '';

  ngOnInit(): void {
    this.fetchCharacters();
  }

  fetchCharacters() {
    const params = this.charactersService.buildParams(
      this.currentPage,
      this.nameFilter,
      this.statusFilter,
      this.genderFilter
    );
    this.charactersService.getCharacters(params).subscribe({
      next: (data: ApiResponseCharacter) => {
        this.characters = data.results;
      },
      error: (error) => console.error(error),
    });
  }

  updateFilters(name?: string, status?: string, gender?: string) {
    if (name !== undefined) this.nameFilter = name;
    if (status !== undefined) this.statusFilter = status;
    if (gender !== undefined) this.genderFilter = gender;
    this.fetchCharacters();
  }

  onNextPage() {
    this.currentPage++;
    this.fetchCharacters();
  }

  onPrevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchCharacters();
    }
  }
}
