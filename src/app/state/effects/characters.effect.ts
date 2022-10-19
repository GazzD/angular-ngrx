import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, map, mergeMap } from "rxjs";
import { RickAndMortyAPIService } from "src/app/services/rick-and-morty-api.service";
import { loadCharacters, loadedCharacters } from "../actions/characters.action";

@Injectable()
export class CharactersEffect {

  loadCharacters$ = createEffect(() => this.actions$.pipe(
    ofType(loadCharacters),
    mergeMap(() => this.rickAndMortyAPIService.getCharacters()
      .pipe(
        map((characters) => loadedCharacters({ characters: characters.results })),
        catchError(() => EMPTY)
      ))
  ));

  constructor(
    private actions$: Actions,
    private rickAndMortyAPIService: RickAndMortyAPIService
  ) {}

}