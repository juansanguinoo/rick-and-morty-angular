import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ApiResponse } from '../interfaces/episodes.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EpisodesService {
  private readonly baseUrl = 'https://rickandmortyapi.com/';
  private http = inject(HttpClient);

  getEpisodes(params: HttpParams): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}/api/episode`, {
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
}
