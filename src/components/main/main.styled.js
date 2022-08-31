import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1920px;
  overflow: auto;
  margin: 100px 100px 100px 0px;
`;

export const PokemonMiniCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const PokemonMiniCards = styled.div`
display: flex;
max-width: 1000px;
flex-direction: row;
flex-wrap: wrap;
}
`;

export const PokemonCard = styled.div`
  border: 1px solid black;
  position: fixed;
  width: 400px;
  height: 700px;
  top: 200px;
  right: 300px;
`;

export const PokemonMiniImage = styled.img`
  width: 250px;
  heigth: 250px;
  object-fit: contain;
`;

export const PokemonMiniCard = styled.div`
  cursor: pointer;
  width: 250px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin: 0px auto;
  align-items: center;
`;

export const PokemonMiniCardName = styled.h3`
  margin: 0px;
  font-size: 24px;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  font-weight: 700;
`;

export const PokemonMiniCardTypes = styled.div`
  display: flex;
  flex-direction: row;
  width: 75%;
  justify-content: space-around;
`;

export const PokemonMiniCardTypesText = styled.p`
  margin: 5px 0px;
  font-size: 16px;
  padding: 5px 10px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  border: 1px solid #000000;
  border-radius: 5px;
`;

export const Button = styled.button`
  max-width: 300px;
  margin: 50px;
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;
