import React, { useState } from 'react'

export default function(props) {
  let [currentValue, setCurrentValue] = useState(props.min)

  let increase = () => setCurrentValue(currentValue < props.max ? currentValue + 1 : props.max)
  let decrease = () => setCurrentValue(currentValue > props.min ? currentValue - 1 : props.min)

  let value = 0

  let connect = (e) => {
    console.log(e.target.value)
    value = e.target.value
    console.log(value)
    if (typeof +value === 'number') {
      value = value >= props.min && value < props.max ? value : value < props.min ? props.min : props.max
    }
    setCurrentValue(value)
  }

  let change = () => setCurrentValue(value)

  return (
    <div>
      <button onClick={decrease}>-</button>
      <input type='text' value={currentValue} onChange={connect} />
      <button onClick={increase}>+</button>
    </div>
  )
}
