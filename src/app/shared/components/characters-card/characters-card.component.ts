import { Component, Input } from '@angular/core';
import { Character } from 'src/app/characters/interfaces/character.interface';

@Component({
  selector: 'app-characters-card',
  templateUrl: './characters-card.component.html',
  styleUrls: ['./characters-card.component.css'],
})
export class CharactersCardComponent {
  @Input() character: Character = {} as Character;
}
