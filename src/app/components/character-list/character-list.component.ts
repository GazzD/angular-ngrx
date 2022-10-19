import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Character } from 'src/app/models/character.model';
import { RickAndMortyAPIService } from 'src/app/services/rick-and-morty-api.service';
import { loadCharacters, loadedCharacters } from 'src/app/state/actions/characters.action';
import { AppState } from 'src/app/state/app.state';
import { selectCharactersList, selectCharactersLoading } from 'src/app/state/selectors/characters.selector';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styles: [
  ]
})
export class CharacterListComponent implements OnInit {

  characters$: Observable<any> = new Observable();

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.characters$ = this.store.select(selectCharactersList); // each time the characters$ changes, the component will be re-rendered

    
  }

}
