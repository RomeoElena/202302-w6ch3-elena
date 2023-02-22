import { createAction } from "@reduxjs/toolkit";
import { CharacterStructure } from "../models/characters";
import { charactersActions } from "./character.actions.types";

export const loadCreator = createAction<CharacterStructure[]>(
  charactersActions.load
);

export const updateCreator = createAction<CharacterStructure>(
  charactersActions.update
);
