import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesPageComponent } from './pages/episodes-page/episodes-page.component';
import { FormsModule } from '@angular/forms';
import { EpisodesDetailsPageComponent } from './pages/episodes-details-page/episodes-details-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [EpisodesPageComponent, EpisodesDetailsPageComponent],
  imports: [CommonModule, EpisodesRoutingModule, FormsModule, SharedModule],
  exports: [],
})
export class EpisodesModule {}
