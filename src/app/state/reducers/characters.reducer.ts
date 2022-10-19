import { createReducer, on } from "@ngrx/store";
import { Character } from "src/app/models/character.model";
import { CharacterState } from "src/app/models/character.state";
import { loadCharacters, loadedCharacters } from "../actions/characters.action";

// Initial state, variables that will be used in several components
export const initialState: CharacterState = { loading: false, characters: [] };

export const characterReducer = createReducer(
  initialState,
  on(loadCharacters, (state) => {
    // do stuff
    return { ...state, loading: true }
  }),
  on(loadedCharacters, (state, { characters }) => {
    return { ...state, loading: false, characters }
  })
);