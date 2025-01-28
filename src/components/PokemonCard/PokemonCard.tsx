const PokemonCard = ({ pokemon }) => {
    return (
        <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.imgSrc} alt={pokemon.name} />
        </div>
    );
};

export default PokemonCard;