import { useEffect, useState } from "react";
import PokemonsMiniCard from "./PokemonsMiniCard";
import { useSelector } from "react-redux";
import { selectType } from "../../store/pokemonSlice";
export const PokemonContainer = (props) => {
  const type = useSelector(selectType);
  const [pokemonData, setPokemonData] = useState([]);
  useEffect(() => {
    try {
      fetch(props.url)
        .then((response) => response.json())
        .then((data) => setPokemonData([data]));
    } catch (error) {
      console.log(error);
    }
  }, [props.url]);
  return pokemonData?.map((pokemonData) => {
    return type !== "" ? (
      pokemonData.types.map((item) => {
        return item.type.name === type ? (
          <PokemonsMiniCard key={pokemonData.name} pokemonData={pokemonData} />
        ) : null;
      })
    ) : (
      <PokemonsMiniCard key={pokemonData.name} pokemonData={pokemonData} />
    );
  });
};

export default PokemonContainer;
