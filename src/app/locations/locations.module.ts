import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsPageComponent } from './pages/locations-page/locations-page.component';
import { LocationsRoutingModule } from './locations-routing.module';
import { LocationCardComponent } from './components/location-card/location-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LocationsPageComponent, LocationCardComponent],
  imports: [CommonModule, LocationsRoutingModule, FormsModule],
})
export class LocationsModule {}
