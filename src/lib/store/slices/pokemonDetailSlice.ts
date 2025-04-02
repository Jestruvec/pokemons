import { PokemonDetail } from "@/lib/types/Pokemon";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface paginationState {
  pokemonDetails: PokemonDetail[];
  selectedPokemonDetail: PokemonDetail | null;
}

const initialState: paginationState = {
  pokemonDetails: [],
  selectedPokemonDetail: null,
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
    setSelectedPokemonDetail: (state, action: PayloadAction<PokemonDetail>) => {
      state.selectedPokemonDetail = action.payload;
    },
    removeSelectedPokemonDetail: (state) => {
      state.selectedPokemonDetail = null;
    },
  },
});

export const {
  addPokemonDetail,
  setSelectedPokemonDetail,
  removeSelectedPokemonDetail,
} = paginationSlice.actions;
export const pokemonDetailReducer = paginationSlice.reducer;
