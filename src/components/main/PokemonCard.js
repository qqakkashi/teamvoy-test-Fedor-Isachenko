import React from "react";
import {
  PokemonChosenCard,
  PokemonBigImage,
  PokemonStatsTable,
  TableLine,
  PokemonName,
  StateMsg,
  PokemonMiniCardTypesText,
} from "./main.styled";
import { useSelector } from "react-redux";
import { selectPokemon } from "../../store/pokemonSlice";

export const PokemonCard = () => {
  const pokemon = useSelector(selectPokemon);

  return pokemon.length !== 0 ? (
    <PokemonChosenCard>
      <PokemonBigImage src={pokemon.sprites.front_default} alt={pokemon.name} />
      <PokemonName>
        {pokemon.name} #{pokemon.id}
      </PokemonName>
      <PokemonStatsTable>
        <tbody>
          <tr>
            <TableLine>type </TableLine>
            <TableLine>
              {pokemon.types.map((item) => {
                return (
                  <PokemonMiniCardTypesText key={item.type.name}>
                    {item.type.name + " "}
                  </PokemonMiniCardTypesText>
                );
              })}
            </TableLine>
          </tr>
          {pokemon.stats.map((stat) => {
            return (
              <tr key={stat.stat.name}>
                <TableLine>{stat.stat.name}</TableLine>{" "}
                <TableLine>{stat.base_stat}</TableLine>
              </tr>
            );
          })}
          <tr>
            <TableLine>weight </TableLine>
            <TableLine>{pokemon.weight}</TableLine>
          </tr>
          <tr>
            <TableLine>total moves </TableLine>
            <TableLine>{pokemon.moves.length}</TableLine>
          </tr>
        </tbody>
      </PokemonStatsTable>
    </PokemonChosenCard>
  ) : (
    <PokemonChosenCard>
      <StateMsg>Chose your pokemon</StateMsg>
    </PokemonChosenCard>
  );
};

export default PokemonCard;
