import { PokemonDetail } from "@/lib/types/Pokemon";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface pokemonState {
  pokemonDetails: PokemonDetail[];
  pokemonsByType: any[];
  selectedPokemonDetail: PokemonDetail | null;
}

const initialState: pokemonState = {
  pokemonDetails: [],
  pokemonsByType: [],
  selectedPokemonDetail: null,
};

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setPokemonsByType: (state, action: PayloadAction<any[]>) => {
      state.pokemonsByType = action.payload;
    },
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
  setPokemonsByType,
  addPokemonDetail,
  setSelectedPokemonDetail,
  removeSelectedPokemonDetail,
} = pokemonSlice.actions;
export const pokemonDetailReducer = pokemonSlice.reducer;
