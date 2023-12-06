import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CharactersDetailsPageComponent } from './pages/characters-details-page/characters-details-page.component';

@NgModule({
  declarations: [
    CharactersPageComponent,
    CharacterCardComponent,
    CharactersDetailsPageComponent,
  ],
  imports: [CommonModule, FormsModule, CharactersRoutingModule],
  exports: [CharacterCardComponent],
})
export class CharactersModule {}
