import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesPageComponent } from './pages/episodes-page/episodes-page.component';
import { EpisodesCardComponent } from './components/episodes-card/episodes-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EpisodesPageComponent, EpisodesCardComponent],
  imports: [CommonModule, EpisodesRoutingModule, FormsModule],
})
export class EpisodesModule {}
