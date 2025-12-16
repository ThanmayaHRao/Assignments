import React from 'react'
import Child2 from './Child2'

const Child1 = (props) => {
  return (
    <div>Child1
        <hr />
        <Child2 data = {props.data}/>
      
    </div>
  )
}

export default Child1
