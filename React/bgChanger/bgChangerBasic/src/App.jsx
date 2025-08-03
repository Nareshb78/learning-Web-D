import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState("black")
  return (
    <>
    <div className='w-full h-screen' style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap bottom-12 inset-x-0 px-2 justify-center'>
          <div className='flex flex-wrap rounded-3xl bg-white justify-center px-2 py-2 gap-3'>
            <button onClick={()=>setColor("red")} className='rounded-full px-4 py-1 text-white outline-none shadow-2xl' style={{backgroundColor:"red"}} >
                Red
            </button>
            <button className='rounded-full px-4 py-1 text-white outline-none shadow-2xl' style={{backgroundColor:"Blue"}} onClick={()=>setColor("red")}>
                Blue
            </button>
            <button className='rounded-full px-4 py-1 text-white outline-none shadow-2xl' style={{backgroundColor:"Green"}} onClick={()=>setColor("Green")}>
                Green
            </button>
            <button className='rounded-full px-4 py-1 text-white outline-none shadow-2xl' style={{backgroundColor:"Lavender"}} onClick={()=>setColor("Lavender")}>
                Lavender
            </button>
            <button className='rounded-full px-4 py-1 text-white outline-none shadow-2xl' style={{backgroundColor:"Pink"}} onClick={()=>setColor("Pink")}>
                Pink
            </button>
            <button className='rounded-full px-4 py-1 text-white outline-none shadow-2xl' style={{backgroundColor:"Olive"}} onClick={()=>setColor("Olive")}>
                Olive
            </button>
            <button className='rounded-full px-4 py-1 text-white outline-none shadow-2xl' style={{backgroundColor:"Brown"}} onClick={()=>setColor("Brown")}>
                Brown
            </button>
          </div>
        </div>
    </div>
      
    </>
  )
}

export default App
