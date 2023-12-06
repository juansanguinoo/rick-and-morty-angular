import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ApiResponseLocation,
  Location,
} from '../interfaces/locations.interface';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  private readonly baseUrl = environment.baseUrl;
  private http = inject(HttpClient);

  getLocations(params: HttpParams): Observable<ApiResponseLocation> {
    return this.http.get<ApiResponseLocation>(`${this.baseUrl}api/location`, {
      params,
    });
  }

  buildParams(page: number, name?: string): HttpParams {
    let params = new HttpParams().set('page', page.toString());
    if (name) {
      params = params.set('name', name);
    }

    return params;
  }

  getLocationById(id: string): Observable<Location> {
    return this.http.get<Location>(`${this.baseUrl}api/location/${id}`);
  }
}
