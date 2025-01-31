import React from "react";

// Définition des types pour la liste des Pokémon
interface Pokemon {
  name: string;
  imgSrc?: string;
}

// Définition des props pour NavBar
interface NavBarProps {
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}

const NavBar: React.FC<NavBarProps> = ({ setPokemonIndex, pokemonList }) => {
  return (
    <nav className="flex gap-2 my-4">
      {pokemonList.map((pokemon, index) => (
        <button
          key={pokemon.name}
          type="button"
          onClick={() => setPokemonIndex(index)}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          {pokemon.name}
        </button>
      ))}
    </nav>
  );
};

export default NavBar;