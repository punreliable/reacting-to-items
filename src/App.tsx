import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './types/Item'
import axios from 'axios'

import { Item } from './types/Item'; // Import the Item type

const itemID: number = 1;

const getItem = (itemID: number) => {
  axios.get(`https://pokeapi.co/api/v2/item/${itemID}`)
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err))
}

const isValidItem = (item: Item): boolean => {
  if(typeof item) { 
    return true 
  } else {
    return false
  }
}

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      {getItem(itemID)}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Item Lookup</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          You are looking up an Item with Item ID: {itemID}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
