import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    value: [],
  },
  reducers: {
    setPokemon(state, action) {
      state.value = action.payload;
    },
  },
});
export const selectPokemon = (state) => state.pokemon.value;

export const { setPokemon, setAllPokemons } = pokemonSlice.actions;
