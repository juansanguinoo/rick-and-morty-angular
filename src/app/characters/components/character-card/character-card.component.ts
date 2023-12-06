import { Component, Input } from '@angular/core';
import { Result } from '../../interfaces/character.interface';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css'],
})
export class CharacterCardComponent {
  @Input() character: Result = {} as Result;
}
