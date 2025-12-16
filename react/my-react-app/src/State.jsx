import React, { useState } from 'react'

const State = () => {
    const[detail,setdetail] = useState()
  return (
    <div>
        <h1>{detail}</h1>
      <input type="text" placeholder="write" value={detail} onChange={(e)=>setdetail(e.target.value)} />
    </div>
  )
}

export default State
