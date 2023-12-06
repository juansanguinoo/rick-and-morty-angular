import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, Location } from '../interfaces/locations.interface';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  private readonly baseUrl = 'https://rickandmortyapi.com/';
  private http = inject(HttpClient);

  getLocations(params: HttpParams): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}/api/location`, {
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
    return this.http.get<Location>(`${this.baseUrl}/api/location/${id}`);
  }
}
