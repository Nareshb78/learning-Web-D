import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
import e from 'cors'

function App() {
  const [length,setLength] = useState(8)
  const [numAllowed,setNumAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed){
      str+="0123456789"
    }

    if(charAllowed){
      str+="!@#$%^&*()_+={}[]<>,.?/|"
    }

    for(let i = 0 ; i < length ; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass+=str.charAt(char)
    }
    setPassword(pass)
  },[length,numAllowed,charAllowed,setPassword])

  const copyToClipboard = useCallback(()=>{
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)
  })

  const passRef = useRef(null)

  useEffect(()=>{
    passwordGenerator()
  },[length,numAllowed,charAllowed])
  return (
    <>
     <div className="flex flex-wrap justify-center w-full h-auto">
      <div className="bg-gray-700 w-[750px] h-auto mx-2 my-20 rounded-3xl p-4 flex flex-col items-center">
        <h1 className="text-center text-white font-bold text-4xl mb-4">Password Generator</h1>
          <div className="flex flex-wrap items-center justify-center gap-x-2">
            <input
              type="text"
              className="rounded-2xl h-10 w-[600px] bg-white px-3 py-1 outline-none"
              value={password}
              readOnly
              ref={passRef}
            />
            <button onClick={copyToClipboard} className="bg-blue-400 rounded-2xl h-10 w-[80px] px-3 py-1 text-white font-medium hover:bg-blue-500 transition">
              Copy
            </button>
          </div>
          <div className='flex flex-wrap gap-4 py-3'>
            <div className='flex flex-wrap gap-1'>
            <input type="range" name="passRange" min={6} max={100} defaultValue={8} onChange={(e)=>{setLength(e.target.value)}}/>
            <div className='text-red-500'>
              Length : {length}
            </div>
          </div>
          <div className='flex flex-wrap gap-1'>
            <input type="checkbox" checked={numAllowed} onChange={()=>setNumAllowed(prev => !prev)}/>
            <div className='text-red-500'>
              Numbers Allowed
            </div>
          </div>
          <div className='flex flex-wrap gap-1'>
            <input type="checkbox" checked={charAllowed} onChange={()=>setCharAllowed(prev => !prev)}/>
            <div className='text-red-500'>
              Characters Allowed 
            </div>
          </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
