import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class IronbnbService {

  readonly baseURL = 'https://ironbnb-m3.herokuapp.com/apartments';

  constructor(
    private http: HttpClient
  ) { }

  getApartments(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/apartments`).pipe(
      delay(1500)
    );
  }

}
