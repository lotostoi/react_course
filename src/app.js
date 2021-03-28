import React from 'react'
import CounterClass from './counters/class.js'
import Valid from './counters/function.js'

export default function() {
  return (
    <div>
      <h2>Counter as function</h2>
      <Valid min={0} max={25} />
    </div>
  )
}
