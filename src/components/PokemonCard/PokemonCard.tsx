import React from "react";

interface PokemonProps {
  pokemon: {
    name: string;
    imgSrc?: string;
  };
}

const PokemonCard: React.FC<PokemonProps> = ({ pokemon }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-bold">{pokemon.name}</h2>
      {pokemon.imgSrc && (
        <img src={pokemon.imgSrc} alt={pokemon.name} className="w-32 h-32 mx-auto mt-2" />
      )}
    </div>
  );
};

export default PokemonCard;