import { useEffect, useState } from "react";
import {
  Container,
  PokemonMiniCardsContainer,
  PokemonMiniCards,
  PokemonCard,
  Button,
} from "./main/main.styled";
import PokemonContainer from "./main/pokeContainer";

let allPokemons = [];

export const Main = () => {
  const [data, setData] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?limit=12");
  const addData = (data, pokemons) => {
    setData(data);
    console.log(allPokemons.length);
    JSON.stringify(allPokemons) === JSON.stringify(pokemons)
      ? (allPokemons = [...pokemons])
      : (allPokemons = [...allPokemons, ...pokemons]);

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
              return <PokemonContainer name={data.name} url={data.url} />;
            })}
          </PokemonMiniCards>
          <PokemonCard>12312312312</PokemonCard>
        </PokemonMiniCardsContainer>
        <Button onClick={() => loadMore()}>load more</Button>
      </Container>
    </main>
  );
};

export default Main;
