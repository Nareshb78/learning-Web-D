import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  const increaseCount = ()=>{
    setCount(count+1)
  }
  const decreaseCount = ()=>{
    if(count-1 < 0){
      setCount(0)
    }else{
      setCount(count-1)
    }
  }
  return (
    <>
      <h1 class="flex items-center bg-blue-500 px-4 py-3 text-white hover:bg-blue-400 rounded-2xl m-3">Counter is : {count}</h1>
      <button onClick={increaseCount} class="rounded-2xl m-3">Increase Count : {count}</button>
      <button onClick={decreaseCount} class="rounded-2xl m-3">Decrease count : {count}</button>
    </>
  )
}

export default App
