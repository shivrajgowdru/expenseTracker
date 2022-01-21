import React from 'react'
import './Output.css'
function Output(props) {
  return (
    <div className="output">
      {props.total}
    </div>
  )
}

export default Output
