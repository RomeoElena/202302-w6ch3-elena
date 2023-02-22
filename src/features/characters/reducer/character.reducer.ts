import { createReducer } from "@reduxjs/toolkit";
import { CharacterStructure } from "../models/characters";
import * as ac from "./character.action.creator";

const initialState: CharacterStructure[] = [];

export const characterReducer = createReducer(initialState, (builder) => {
  builder.addCase(ac.loadCreator, (_state, { payload }) => payload);

  builder.addCase(ac.updateCreator, (state, { payload }) =>
    state.map((item) => (item.name === payload.name ? payload : item))
  );
  builder.addDefaultCase((state) => state);
});
