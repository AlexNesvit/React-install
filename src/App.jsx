import { useState } from 'react'
import './App.css'
import MyButton from '/src/components/MyButton/MyButton.jsx'
import PokemonCard from '/src/components/PokemonCard/PokemonCard.tsx'


const App = () => {
  const pokemonList = [
      { name: "pikachu", imgSrc: "pikachu.png" },
      { name: "mew", imgSrc: "mew.png" },
  ];

  return (
    <>
      <div>
          <PokemonCard pokemon={pokemonList[0]} />
      </div>
      <MyButton />
      <h1>React Basics 04 - Pokédex - Passer des props</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count + is {count}
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          count - is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
    </>
  )
}

export default App
