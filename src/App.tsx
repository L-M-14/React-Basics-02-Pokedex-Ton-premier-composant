import React, { useState } from 'react';
import PokemonCard from './components/PokemonCard';

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

const App: React.FC = () => {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handlePokemonClick = (index: number) => {
    setPokemonIndex(index);
  };

  return (
    <div>
      <nav>
        {pokemonList.map((pokemon, index) => (
          <button key={pokemon.name} onClick={() => handlePokemonClick(index)}>
            {pokemon.name}
          </button>
        ))}
      </nav>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  );
};

export default App;
