import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyAPIService {

  readonly baseURL = 'https://rickandmortyapi.com/api';

  constructor(
    private http: HttpClient
  ) { }

  getCharacters(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/character`).pipe(
      delay(1500)
    );
  }

}
