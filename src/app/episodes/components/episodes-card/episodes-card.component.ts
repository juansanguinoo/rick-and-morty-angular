import { Component, Input } from '@angular/core';
import { Episode } from '../../interfaces/episodes.interface';

@Component({
  selector: 'app-episodes-card',
  templateUrl: './episodes-card.component.html',
  styleUrls: ['./episodes-card.component.css'],
})
export class EpisodesCardComponent {
  @Input() episode: Episode = {} as Episode;
}
