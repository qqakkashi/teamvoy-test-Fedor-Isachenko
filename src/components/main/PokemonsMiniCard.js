import React from "react";
import { setPokemon } from "../../store/pokemonSlice";
import {
  PokemonMiniCard,
  PokemonMiniImage,
  PokemonMiniCardName,
  PokemonMiniCardTypes,
  PokemonMiniCardTypesText,
} from "./main.styled";
import { useDispatch } from "react-redux";

export const PokemonsMiniCard = (props) => {
  const dispatch = useDispatch();
  return (
    <PokemonMiniCard onClick={() => dispatch(setPokemon(props.pokemonData))}>
      <PokemonMiniImage
        src={props.pokemonData?.sprites?.front_default}
        alt={props.pokemonData.name}
      />
      <PokemonMiniCardName>{props.pokemonData.name}</PokemonMiniCardName>
      <PokemonMiniCardTypes>
        {props.pokemonData?.types?.map((item, index) => {
          return (
            <PokemonMiniCardTypesText key={index}>
              {item.type.name}
            </PokemonMiniCardTypesText>
          );
        })}
      </PokemonMiniCardTypes>
    </PokemonMiniCard>
  );
};

export default PokemonsMiniCard;
