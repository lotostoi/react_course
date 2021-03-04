import React from 'react'
import CounterClass from './counters/class.js'
import CounterFunction from './counters/function.js'

export default function() {
  return (
    <div>
      <h2>Counter as function</h2>
      <CounterFunction min={0} max={25} />
    </div>
  )
}
