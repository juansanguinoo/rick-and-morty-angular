import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CharactersModule } from '../characters/characters.module';
import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesPageComponent } from './pages/episodes-page/episodes-page.component';
import { EpisodesCardComponent } from './components/episodes-card/episodes-card.component';
import { EpisodesDetailsPageComponent } from './pages/episodes-details-page/episodes-details-page.component';

@NgModule({
  declarations: [
    EpisodesPageComponent,
    EpisodesCardComponent,
    EpisodesDetailsPageComponent,
  ],
  imports: [CommonModule, FormsModule, EpisodesRoutingModule, CharactersModule],
})
export class EpisodesModule {}
