import { createAction, props } from "@ngrx/store";
import { Character } from "src/app/models/character.model";

export const loadCharacters = createAction(
  '[Characters] Load Characters',
);

export const loadedCharacters = createAction(
  '[Characters] Loaded Characters',
  props<{ characters: Character[] }>()
);

