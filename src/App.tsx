import React, { useState, useEffect } from "react";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import NavBar from "./components/NavBar/NavBar";

// Liste des pokémons avec typage
interface Pokemon {
  name: string;
  imgSrc?: string;
}

const pokemonList: Pokemon[] = [
  { name: "bulbasaur", imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" },
  { name: "charmander", imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" },
  { name: "squirtle", imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png" },
  { name: "pikachu", imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" },
  { name: "mew" },
];

const App: React.FC = () => {
  const [pokemonIndex, setPokemonIndex] = useState<number>(0);

  // Affiche une alerte au démarrage de l'application
  useEffect(() => {
    alert("hello pokemon trainer :)");
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <NavBar setPokemonIndex={setPokemonIndex} pokemonList={pokemonList} />
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  );
};

export default App;