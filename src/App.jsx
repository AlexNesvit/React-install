import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from '/src/components/MyButton/MyButton.jsx'
import PokemonCard from '/src/components/PokemonCard/PokemonCard.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <PokemonCard />
      </div>
      <MyButton />
      <h1>React Basics 02 - Pokédex</h1>
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
