import styled from "styled-components";

export const Pokedex = styled.h1`
  display: flex;
  height: 60px;
  margin: 50px 0px;
  font-size: 50px;
  text-transform: uppercase;
  font-weight: 700;
  justify-content: center;
`;

export const MenuContainer = styled.div`
  cursor: pointer;
  display: flex;
  height: 50px;
  max-width: 220px;
  align-self: center;
  justify-content: center;
  margin: 45px 0px;
  background-color: #ffffff;
  border-radius: 10px;
  z-index: 2;
  padding: 10px;
`;
export const MenuIcon = styled.img`
  width: 50px;
`;

export const TypeMenuButton = styled.button`
  display: flex;
  cursor: pointer;
  border-radius: 10px;
  width: 150px;
  background-color: #ffffff;
  border: 0px;
  justify-content: center;
  align-items: center;
`;
export const TypeMenuTarget = styled.p`
  text-transform: uppercase;
  margin: 0px;
  padding: 5px 15px;
  font-size: 20px;
  font-weight: 700;
`;
export const TypeSortMenu = styled.ul`
  position: absolute;
  top: 125px;
  height: 450px;
  border-radius: 10px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  width: 115px;
  padding: 0px;
  background-color: #ffffff;
  margin: 0px;
  z-index: 2;
  @media screen and (max-width: 768px) {
    top: 285px;
    flex-direction: column-reverse;
  }
`;
export const TypeSortButton = styled.li`
  border-radius: 10px;
  padding: 10px 5px;
  list-style-type: none;
  display: flex;
  width: 100px;
  justify-content: center;
  &:hover {
    cursor: pointer;
    background-color: #e8e5e3;
  }
`;
export const TypeSortMenuOverlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #5e5e5e;
  z-index: 1;
  opacity: 0.3;
`;
