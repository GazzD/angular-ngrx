import { ActionReducerMap } from "@ngrx/store";
import { Character } from "../models/character.model";
import { CharacterState } from "../models/character.state";
import { characterReducer } from "./reducers/characters.reducer";

export interface AppState {
  characters: CharacterState
}

// reducers that will be referenced in the store (app.module)
export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  // Store variables
  characters: characterReducer
};