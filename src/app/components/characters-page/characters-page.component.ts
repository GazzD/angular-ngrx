import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Character } from 'src/app/models/character.model';
import { RickAndMortyAPIService } from 'src/app/services/rick-and-morty-api.service';
import { loadCharacters, loadedCharacters } from 'src/app/state/actions/characters.action';
import { AppState } from 'src/app/state/app.state';
import { selectCharactersLoading } from 'src/app/state/selectors/characters.selector';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit {

  characters: Character[] = [];
  loading$: Observable<boolean> = new Observable();
  characters$: Observable<Character[]> = new Observable();

  constructor(
    private store: Store<AppState>,
    private rickAndMortyAPIService: RickAndMortyAPIService,
    
  ) { }

  ngOnInit(): void {
    this.loading$ = this.store.select(selectCharactersLoading);
    this.store.dispatch(loadCharacters()); // this will trigger the action that will trigger the effect that will trigger the service

    // this.rickAndMortyAPIService.getCharacters().subscribe((characters) => {
    //   console.log(characters.results);
    //   this.characters = characters.results;
    //   this.store.dispatch(loadedCharacters({ characters: this.characters }));
    // });
  }

}
