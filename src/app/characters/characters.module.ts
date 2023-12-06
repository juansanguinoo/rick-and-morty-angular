import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CharactersPageComponent, CharacterCardComponent],
  imports: [CommonModule, CharactersRoutingModule, FormsModule],
})
export class CharactersModule {}
