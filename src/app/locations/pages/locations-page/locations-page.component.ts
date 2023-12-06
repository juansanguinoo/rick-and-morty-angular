import { Component, OnInit, inject } from '@angular/core';

import { LocationsService } from '../../services/locations.service';
import {
  ApiResponseLocation,
  Location,
} from '../../interfaces/locations.interface';

@Component({
  selector: 'app-locations-page',
  templateUrl: './locations-page.component.html',
  styleUrls: ['./locations-page.component.css'],
})
export class LocationsPageComponent implements OnInit {
  private locationsService = inject(LocationsService);
  public locations: Location[] = [];
  public currentPage: number = 1;
  public nameFilter: string = '';

  ngOnInit(): void {
    this.fetchLocations();
  }

  fetchLocations() {
    const params = this.locationsService.buildParams(
      this.currentPage,
      this.nameFilter
    );
    this.locationsService.getLocations(params).subscribe({
      next: (data: ApiResponseLocation) => {
        this.locations = data.results;
        console.log(this.locations);
      },
      error: (error) => console.error(error),
    });
  }

  updateFilters(name?: string) {
    if (name !== undefined) this.nameFilter = name;
    this.fetchLocations();
  }

  onNextPage() {
    this.currentPage++;
    this.fetchLocations();
  }

  onPrevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchLocations();
    }
  }
}
