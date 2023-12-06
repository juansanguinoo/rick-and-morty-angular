import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environments';
import {
  ApiResponseCharacter,
  Character,
} from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private readonly baseUrl = environment.baseUrl;
  private http = inject(HttpClient);

  getCharacters(params: HttpParams): Observable<ApiResponseCharacter> {
    return this.http.get<ApiResponseCharacter>(`${this.baseUrl}api/character`, {
      params,
    });
  }

  buildParams(
    page: number,
    name?: string,
    status?: string,
    gender?: string
  ): HttpParams {
    let params = new HttpParams().set('page', page.toString());
    if (name) {
      params = params.set('name', name);
    }

    if (status) {
      params = params.set('status', status);
    }

    if (gender) {
      params = params.set('gender', gender);
    }

    return params;
  }

  getCharacterById(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.baseUrl}api/character/${id}`);
  }
}
