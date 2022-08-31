import React from "react";
import {
  PokemonChosenCard,
  PokemonBigImage,
  PokemonStatsTable,
  TableLine,
  PokemonName,
  StateMsg,
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
        <tr>
          <TableLine>type </TableLine>
          <TableLine>
            {pokemon.types.map((item) => {
              return item.type.name + " ";
            })}
          </TableLine>
        </tr>
        {pokemon.stats.map((stat) => {
          return (
            <tr>
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
      </PokemonStatsTable>
    </PokemonChosenCard>
  ) : (
    <PokemonChosenCard>
      <StateMsg>Chose your pokemon</StateMsg>
    </PokemonChosenCard>
  );
};

export default PokemonCard;
