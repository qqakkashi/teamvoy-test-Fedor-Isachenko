import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    value: [],
    type: "",
    allData: [],
  },
  reducers: {
    setPokemon(state, action) {
      state.value = action.payload;
    },
    setType(state, action) {
      state.type = action.payload;
    },
    setAllData(state, action) {
      state.allData = action.payload;
    },
  },
});
export const selectPokemon = (state) => state.pokemon.value;
export const selectType = (state) => state.pokemon.type;
export const selectAllData = (state) => state.pokemon.allData;

export const { setPokemon, setType, setAllData } = pokemonSlice.actions;
