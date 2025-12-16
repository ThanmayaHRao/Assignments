import React from 'react'
import Child1 from './Child1'

const Parent = (props) => {
  return (
    <div>parent
        <hr />
        <Child1 data = {props.company} />
      
    </div>
  )
}

export default Parent
