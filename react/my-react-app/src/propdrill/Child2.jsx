import React from 'react'
import Child3 from './Child3'

const Child2 = (props) => {
  return (
    <div>CHild2
      <hr />
      <Child3 data = {props.data}/>
    </div>
  )
}

export default Child2
