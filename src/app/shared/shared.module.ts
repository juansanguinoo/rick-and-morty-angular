import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodesCardComponent } from './components/episodes-card/episodes-card.component';
import { CharactersCardComponent } from './components/characters-card/characters-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [EpisodesCardComponent, CharactersCardComponent],
  imports: [CommonModule, RouterModule],
  exports: [EpisodesCardComponent, CharactersCardComponent],
})
export class SharedModule {}
