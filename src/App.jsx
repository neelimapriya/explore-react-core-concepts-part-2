import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './Team'
import Users from './User'
import Friends from './Friends'

function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    alert('button click')
  }

  const handleClick2=()=>{
    alert('button 2 clicked')
  }
  const addToFive=(num)=>{
    alert(num+5)
  }

  return (
    <>
      <h1> React Core Concepts 2</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>

      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me2</button>
      <button onClick={()=>{alert('third clicked')}}>Third click</button>

      <button onClick={()=> addToFive(3)}>Four </button>

    </>
  )
}

export default App
