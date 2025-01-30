import React from 'react';

interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
  pokemonIndex: number;
}

const NavBar: React.FC<NavBarProps> = ({ setPokemonIndex, pokemonList, pokemonIndex }) => {
  const handlePrevious = () => {
   const pikachuAlert = ((pokemonIndex - 1 + pokemonList.length) % pokemonList.length);
    setPokemonIndex(pikachuAlert);
    if (pokemonList[pikachuAlert].name === "pikachu") {
      alert("pika pikachu !!!");
    }
  };

  const handleNext = () => {
    const pikachuAlert = ((pokemonIndex + 1) % pokemonList.length);
    setPokemonIndex(pikachuAlert);
    if (pokemonList[pikachuAlert].name === "pikachu") {
      alert("pika pikachu !!!");
    }
  };

  const PokemonSelect = (index: number) => {
    setPokemonIndex(index);
    if (pokemonList[index].name === "pikachu") {
      alert("pika pikachu !!!");
    }
  };

  return (
    <nav>
      <button type="button" onClick={handlePrevious} disabled={pokemonIndex === 0}>
        Précédent
      </button>
      {pokemonList.map((pokemon, index) => (
        <button
          key={pokemon.name}
          type="button"
          onClick={() =>PokemonSelect(index)}
          aria-label={`Select ${pokemon.name}`}
        >
          {pokemon.name}
        </button>
      ))}
      <button type="button" onClick={handleNext} disabled={pokemonIndex === pokemonList.length - 1}>
        Suivant
      </button>
    </nav>
  );
};

export default NavBar;
