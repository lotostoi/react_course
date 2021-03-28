import React, { useState } from 'react'
import PropTypes from 'prop-types'

function valid(props) {

  let [currentValue, setCurrentValue] = useState(props.min)
  let [validValue, setValidValue] = useState(currentValue)

  let increase = () => setCurrentValue(currentValue < props.max ? currentValue + 1 : props.max)
  let decrease = () => setCurrentValue(currentValue > props.min ? currentValue - 1 : props.min)
 
  let value = 0
  let connect = (e) => {
    value = parseInt(e.target.value)
    if (typeof value === 'number' ) {
      value = value >= props.min && value < props.max ? value : value < props.min ? props.min : props.max
    }
    setCurrentValue(value)
    setValidValue(value)
  } 

  let change = (e) => {
    setValidValue(e.target.value)
  }

  return (
    <div>
      <button onClick={decrease}>-</button>
      <input type='text' value={validValue} onChange={change} onBlur={connect} />
      <button onClick={increase}>+</button>
    </div>
  )
}

valid.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
}
export default valid