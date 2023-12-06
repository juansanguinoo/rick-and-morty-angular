import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationsPageComponent } from './pages/locations-page/locations-page.component';
import { LocationsDetailsPageComponent } from './pages/locations-details-page/locations-details-page.component';

const routes: Routes = [
  {
    path: '',
    component: LocationsPageComponent,
  },
  {
    path: ':id',
    component: LocationsDetailsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationsRoutingModule {}
