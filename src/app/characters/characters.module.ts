import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { FormsModule } from '@angular/forms';
import { CharactersDetailsPageComponent } from './pages/characters-details-page/characters-details-page.component';
import { EpisodesModule } from '../episodes/episodes.module';

@NgModule({
  declarations: [
    CharactersPageComponent,
    CharacterCardComponent,
    CharactersDetailsPageComponent,
  ],
  imports: [CommonModule, CharactersRoutingModule, FormsModule],
  exports: [CharacterCardComponent],
})
export class CharactersModule {}
