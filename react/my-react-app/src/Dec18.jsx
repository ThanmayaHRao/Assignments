import React from 'react'
import { useEffect } from 'react'


const Dec18 = () => {
    const[data,setdata]=React.useState()
    const[info,setinfo]=React.useState("hello")

let clicked=()=>{
    console.log("Button clicked")
}
let doclicked=()=>{
    console.log("Button double clicked")
}
let parameter=(e)=>{
    setdata(e.target.value)
    
    
}
let handleclick=()=>{
    console.log("parameter passed is",info)
}
let infoparam=(e)=>{
    setinfo(e.target.value)
}


  useEffect(() => {

    const handleKeyDown = (e) => {
      console.log("Global key pressed:", e.key);

      if (e.key === "Enter") {
        console.log("Enter key pressed globally");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };

  }, []);


  return (
    <div>
        
        <button onClick={clicked}> Click me</button>
        <br />
        <button onDoubleClick={doclicked}>double clicked</button>
        <br />
        <input type="text" value={info} onChange={infoparam} />
        <button onClick={handleclick}>try pass param</button>
        <br />
          <div>
      <h2>Press any key (global listener)</h2>
      <p>Open console and press Enter anywhere</p>
    </div>
        
        
        
    </div>
  )
}

export default Dec18
