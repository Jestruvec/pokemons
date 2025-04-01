import { configureStore } from "@reduxjs/toolkit";
import { pokemonDetailReducer } from "./slices/pokemonDetailSlice";

export const store = configureStore({
  reducer: {
    pokemonDetails: pokemonDetailReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Deshabilita la verificación de serialización
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
