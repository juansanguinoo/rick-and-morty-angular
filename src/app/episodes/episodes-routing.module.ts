import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EpisodesPageComponent } from './pages/episodes-page/episodes-page.component';
import { EpisodesDetailsPageComponent } from './pages/episodes-details-page/episodes-details-page.component';

const routes: Routes = [
  {
    path: '',
    component: EpisodesPageComponent,
  },
  {
    path: ':id',
    component: EpisodesDetailsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpisodesRoutingModule {}
