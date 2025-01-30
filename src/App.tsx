import React, { useState } from "react";
import PokemonCard from "./components/PokemonCard/PokemonCard";

// Interface pour sécuriser le typage des pokémons
interface Pokemon {
  name: string;
  imgSrc?: string;
}

// Liste des pokémons
const pokemonList: Pokemon[] = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

const App: React.FC = () => {
  const [pokemonIndex, setPokemonIndex] = useState<number>(0);

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      {/* Navigation avec les boutons dynamiques */}
      <nav className="flex gap-2">
        {pokemonList.map((pokemon, index) => (
          <button
            key={pokemon.name} // Utilisation du name comme key (unique)
            onClick={() => setPokemonIndex(index)}
            className={`px-4 py-2 rounded ${
              pokemonIndex === index ? "bg-blue-600 text-white" : "bg-gray-300"
            }`}
          >
            {pokemon.name}
          </button>
        ))}
      </nav>

      {/* Affichage de la carte du Pokémon sélectionné */}
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  );
};

export default App;