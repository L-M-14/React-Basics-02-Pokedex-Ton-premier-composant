import React from 'react';
import PokemonCard from './components/PokemonCard';

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

const App: React.FC = () => {
  return (
    <div>
      <PokemonCard pokemon={pokemonList[1]} /> {/* Passe le deuxième Pokémon du tableau */}
    </div>
  );
};

export default App;