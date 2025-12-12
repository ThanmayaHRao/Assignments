import React from 'react'
import { useState } from 'react'


const Counter = () => {
    const [count, setCount] = useState(0)
    const[on,seton] = useState(0);
    const[type,settype] = useState("");

 let chnage = ()=>{
    setCount(count +1)
 }

 let lighton = ()=>{
    seton(1)
 }
let lightoff = ()=>{
    seton(0)

}
 

  return (
    
    <div >
       
      <h1>{count}</h1>
      <button onClick={chnage}>Counter</button>
      {on == 1?<h1>on</h1>:<h2>off</h2>}
      <button onClick={lighton}>on</button>
      <button onClick={lightoff}>off</button>
      <input type="text" placeholder='enter the input' value={type} onChange={(e)=>settype(e.target.value)}/>
      <h1>{type}</h1>
      
        
    </div>
    
  )
}

export default Counter
