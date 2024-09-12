import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increase() {
    setCount(count+1)
  }
  return (
    <>
     
     <button onClick={increase}>
          count is {count}
        </button>
    </>
  )
}

export default App
