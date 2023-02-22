import { configureStore } from "@reduxjs/toolkit";
import { characterReducer } from "../../features/characters/reducer/character.reducer";

export const store = configureStore({
  reducer: {},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
