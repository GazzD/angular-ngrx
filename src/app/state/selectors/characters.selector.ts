import { createSelector } from "@ngrx/store";
import { CharacterState } from "src/app/models/character.state";
import { AppState } from "../app.state";

export const selectCharacters = (state: AppState) => state.characters;


// Selects the characters from the store
export const selectCharactersList = createSelector(
  selectCharacters,
  (state: CharacterState) => state.characters
); 

// Selects the loading state from the store
export const selectCharactersLoading = createSelector(
  selectCharacters,
  (state: CharacterState) => state.loading
);