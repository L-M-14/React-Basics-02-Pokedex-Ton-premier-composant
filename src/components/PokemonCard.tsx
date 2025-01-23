import React from 'react';

interface Pokemon {
    name: string;
    imgSrc?: string;
}

const PokemonCard: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
    return (
        <figure>
            {pokemon.imgSrc ? (
                <img src={pokemon.imgSrc} alt={pokemon.name} />
            ) : (
                <p>???</p>
            )}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    );
};

export default PokemonCard;