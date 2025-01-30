import React, { useState } from "react";
import PokemonCard from './components/PokemonCard/PokemonCard.tsx'

const pokemonList = [
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
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handlePrevious = () => {
    setPokemonIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setPokemonIndex((prevIndex) => Math.min(prevIndex + 1, pokemonList.length - 1));
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <div className="flex gap-4">
        {pokemonIndex > 0 && (
          <button onClick={handlePrevious} className="px-4 py-2 bg-blue-500 text-white rounded">
            Précédent
          </button>
        )}
        {pokemonIndex < pokemonList.length - 1 && (
          <button onClick={handleNext} className="px-4 py-2 bg-green-500 text-white rounded">
            Suivant
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
