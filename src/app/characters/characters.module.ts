import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { FormsModule } from '@angular/forms';
import { CharactersDetailsPageComponent } from './pages/characters-details-page/characters-details-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CharactersPageComponent, CharactersDetailsPageComponent],
  imports: [CommonModule, CharactersRoutingModule, FormsModule, SharedModule],
  exports: [],
})
export class CharactersModule {}
