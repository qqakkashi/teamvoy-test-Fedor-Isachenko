import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  overflow: auto;
  margin: 50px auto;
`;

export const PokemonMiniCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const PokemonMiniCards = styled.div`
  display: flex;
  max-width: 1000px;
  flex-direction: row;
  margin: 0px auto;
  flex-wrap: wrap;
  height: 700px;
  overflow: auto;

  @media screen and (max-width: 1440px) {
    width: 700px;
  }
  @media screen and (max-width: 1110px) {
    width: 325px;
    height: 720px;
  }
  @media screen and (max-width: 768px) {
    height: 450px;
  }
`;

export const PokemonChosenCard = styled.div`
  border-radius: 20px;
  margin: 15px auto;
  max-width: 400px;
  @media screen and (max-width: 768px) {
    height: 720px;
  }
  padding: 10px 50px;
  box-shadow: 0px 0px 26px -4px rgba(0, 0, 0, 0.3);
`;

export const PokemonMiniImage = styled.img`
  width: 250px;
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
  font-weight: 400;
  border: 1px solid #000000;
  border-radius: 5px;
`;

export const Button = styled.button`
  text-transform: uppercase;
  width: 350px;
  margin: 20px 60px;
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 10px;
  @media screen and (max-width: 1440px) {
    margin: 20px auto;
  }
`;

export const PokemonBigImage = styled.img`
  display: flex;
  margin: 0px auto;
  width: 250px;
  object-fit: contain;
`;

export const PokemonStatsTable = styled.table`
  border: 1px solid #5e5e5e;
  text-align: center;
  border-collapse: collapse;
  margin: 25px auto;
`;

export const TableLine = styled.th`
  padding: 10px;
  min-width: 100px;
  font-weight: 400;
`;

export const PokemonName = styled.h1`
  font-size: 32px;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
`;

export const StateMsg = styled.h1`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0;
`;
