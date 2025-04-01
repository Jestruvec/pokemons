import { PokemonDetail } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface paginationState {
  pokemonDetails: PokemonDetail[];
}

const initialState: paginationState = {
  pokemonDetails: [],
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    addPokemonDetail: (state, action: PayloadAction<PokemonDetail>) => {
      const findDetail = state.pokemonDetails.find(
        (e) => e.name === action.payload.name
      );

      if (!findDetail) {
        state.pokemonDetails.push(action.payload);
      }
    },
  },
});

export const { addPokemonDetail } = paginationSlice.actions;
export const pokemonDetailReducer = paginationSlice.reducer;
