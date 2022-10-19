import { Character } from "./character.model";

export interface CharacterState {
  loading: boolean,
  characters: ReadonlyArray<Character>;
}