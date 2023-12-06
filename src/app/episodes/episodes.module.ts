import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesPageComponent } from './pages/episodes-page/episodes-page.component';
import { EpisodesCardComponent } from './components/episodes-card/episodes-card.component';
import { FormsModule } from '@angular/forms';
import { EpisodesDetailsPageComponent } from './pages/episodes-details-page/episodes-details-page.component';
import { CharacterCardComponent } from '../characters/components/character-card/character-card.component';
import { CharactersModule } from '../characters/characters.module';

@NgModule({
  declarations: [
    EpisodesPageComponent,
    EpisodesCardComponent,
    EpisodesDetailsPageComponent,
  ],
  imports: [CommonModule, EpisodesRoutingModule, FormsModule, CharactersModule],
})
export class EpisodesModule {}
