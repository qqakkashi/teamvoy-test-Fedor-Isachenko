import { useEffect, useState } from "react";
import {
  Pokedex,
  TypeSortMenu,
  TypeSortButton,
  TypeMenuButton,
  TypeMenuTarget,
  MenuContainer,
  MenuIcon,
  TypeSortMenuOverlay,
} from "./header/header.styled";
import { selectType, setType } from "../store/pokemonSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  const [types, setTypes] = useState([]);
  const type = useSelector(selectType);
  const typeUrl = "https://pokeapi.co/api/v2/type";
  const [isTypeMenuOpen, setIsTypeMenuOpen] = useState(false);
  useEffect(() => {
    try {
      fetch(typeUrl)
        .then((response) => response.json())
        .then((data) => setTypes(data.results));
    } catch (error) {
      console.log(error);
    }
  }, [typeUrl]);
  const sortButtonClick = (item) => {
    dispatch(setType(item));
    setIsTypeMenuOpen(!isTypeMenuOpen);
  };
  return (
    <header>
      <MenuContainer onClick={() => setIsTypeMenuOpen(!isTypeMenuOpen)}>
        <MenuIcon
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg"
          alt="pokeball_sort"
        ></MenuIcon>
        <TypeMenuButton>
          <TypeMenuTarget>{type !== "" ? type : "chose type"}</TypeMenuTarget>
        </TypeMenuButton>
        {isTypeMenuOpen && (
          <TypeSortMenu>
            {types.map((item) => {
              return (
                <TypeSortButton
                  key={item.name}
                  onClick={() => sortButtonClick(item.name)}
                >
                  {item.name}
                </TypeSortButton>
              );
            })}
            <TypeSortButton onClick={() => dispatch(setType(""))}>
              all
            </TypeSortButton>
          </TypeSortMenu>
        )}
      </MenuContainer>
      {isTypeMenuOpen && (
        <TypeSortMenuOverlay
          onClick={() => setIsTypeMenuOpen(!isTypeMenuOpen)}
        ></TypeSortMenuOverlay>
      )}
      <Pokedex>Pokedex</Pokedex>
    </header>
  );
}
