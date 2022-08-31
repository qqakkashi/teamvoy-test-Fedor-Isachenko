import { useEffect, useState } from "react";
import {
  PokemonMiniCard,
  PokemonMiniImage,
  PokemonMiniCardName,
  PokemonMiniCardTypes,
  PokemonMiniCardTypesText,
} from "./main.styled";

export const PokemonContainer = (props) => {
  const [pokemonData, setPokemonData] = useState([]);
  useEffect(() => {
    try {
      fetch(props.url)
        .then((response) => response.json())
        .then((data) => setPokemonData(data));
    } catch (error) {
      console.log(error);
    }
  }, [props.url]);
  return (
    <PokemonMiniCard>
      <PokemonMiniImage
        src={pokemonData?.sprites?.front_default}
        alt={pokemonData.name}
      />
      <PokemonMiniCardName>{pokemonData.name}</PokemonMiniCardName>
      <PokemonMiniCardTypes>
        {pokemonData?.types?.map((item, index) => {
          return (
            <PokemonMiniCardTypesText key={index}>
              {" "}
              {item.type.name}
            </PokemonMiniCardTypesText>
          );
        })}
      </PokemonMiniCardTypes>
    </PokemonMiniCard>
  );
};

export default PokemonContainer;
