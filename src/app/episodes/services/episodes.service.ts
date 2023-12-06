import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ApiResponseEpisode, Episode } from '../interfaces/episodes.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class EpisodesService {
  private readonly baseUrl = environment.baseUrl;
  private http = inject(HttpClient);

  getEpisodes(params: HttpParams): Observable<ApiResponseEpisode> {
    return this.http.get<ApiResponseEpisode>(`${this.baseUrl}api/episode`, {
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

  getEpisodeById(id: number): Observable<Episode> {
    return this.http.get<Episode>(`${this.baseUrl}api/episode/${id}`);
  }
}
