import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Greeting from './Greeting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>見出しを書く</h1>
      <Greeting name="cyber" greet="こんにちは！" />


    </>
  )
}

export default App
