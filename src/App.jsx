import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Greeting from './Greeting'

function App() {
  const [count, setCount] = useState(0)
  let cnt = 0 
  function countup() {
    setCount(count + 1)
    console.log("押された", count)
  }

  return (
    <>
      <h1>見出しを書く</h1>
      <Greeting name="cyber" onclick={countup}greet="こんにちは！"/>
      {count}
      <button >押して</button>


    </>
  )
}

export default App
