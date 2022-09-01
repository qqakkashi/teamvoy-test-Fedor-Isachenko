import { useEffect, useState } from "react";
import {
  Container,
  PokemonMiniCardsContainer,
  PokemonMiniCards,
  Button,
} from "./main/main.styled";
import PokemonContainer from "./main/PokemonContainer";
import { useSelector } from "react-redux";
import { selectType } from "../store/pokemonSlice";
import PokemonCard from "./main/PokemonCard";

let allPokemons = [];

export const Main = () => {
  const [data, setData] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const type = useSelector(selectType);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?limit=12");
  const addData = (data, pokemon) => {
    setData(data);
    JSON.stringify(allPokemons) === JSON.stringify(pokemon)
      ? (allPokemons = [...pokemon])
      : (allPokemons = [...allPokemons, ...pokemon]);

    setPokemons(allPokemons);
  };
  useEffect(() => {
    try {
      fetch(url)
        .then((response) => response.json())
        .then((data) => addData(data, data.results));
    } catch (error) {
      console.log(error);
    }
  }, [url]);
  const loadMore = () => {
    setUrl(data?.next);
  };

  return (
    <main>
      <Container>
        <PokemonMiniCardsContainer>
          <PokemonMiniCards>
            {pokemons?.map((data) => {
              return (
                <PokemonContainer
                  key={data.name}
                  name={data.name}
                  url={data.url}
                />
              );
            })}
          </PokemonMiniCards>
          <PokemonCard />
        </PokemonMiniCardsContainer>
        <Button onClick={() => loadMore()}>load more</Button>
      </Container>
    </main>
  );
};

export default Main;
