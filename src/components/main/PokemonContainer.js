import { useEffect, useState } from "react";
import PokemonsMiniCard from "./PokemonsMiniCard";

let allData = [];
export const PokemonContainer = (props) => {
  const [pokemonData, setPokemonData] = useState([]);
  const addPokemonData = (data) => {
    allData = [data];
    setPokemonData(allData);
  };
  useEffect(() => {
    try {
      fetch(props.url)
        .then((response) => response.json())
        .then((data) => addPokemonData(data));
    } catch (error) {
      console.log(error);
    }
  }, [props.url]);
  return pokemonData.map((pokemonData) => {
    return (
      <PokemonsMiniCard key={pokemonData.name} pokemonData={pokemonData} />
    );
  });
};

export default PokemonContainer;
