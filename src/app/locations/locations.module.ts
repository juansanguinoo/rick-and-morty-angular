import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsPageComponent } from './pages/locations-page/locations-page.component';
import { LocationsRoutingModule } from './locations-routing.module';
import { LocationCardComponent } from './components/location-card/location-card.component';
import { FormsModule } from '@angular/forms';
import { LocationsDetailsPageComponent } from './pages/locations-details-page/locations-details-page.component';
import { CharactersModule } from '../characters/characters.module';

@NgModule({
  declarations: [
    LocationsPageComponent,
    LocationCardComponent,
    LocationsDetailsPageComponent,
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    FormsModule,
    CharactersModule,
  ],
})
export class LocationsModule {}
