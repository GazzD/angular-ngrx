import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Character } from 'src/app/models/character.model';
import { AppState } from 'src/app/state/app.state';
import { selectCharactersList } from 'src/app/state/selectors/characters.selector';

@Component({
  selector: 'app-character-filter',
  templateUrl: './character-filter.component.html',
  styleUrls: ['./character-filter.component.scss']
})
export class CharacterFilterComponent implements OnInit {

  count: number = 0;

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.store.select(selectCharactersList).subscribe(
      (characters) => {
        this.count = characters.length;
      }
    );
  }

}
