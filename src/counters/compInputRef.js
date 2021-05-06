import React from 'react'
import PropTypes from 'prop-types'
import AppInput from './inputWithRef'
import style from "./style.modules.scss"

export default class extends React.Component {


  static propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    onChange: PropTypes.func,
    onInput: PropTypes.func,
    value: PropTypes.number.isRequired,
  }

  setCnt(value) {
    const newValue = Math.min(this.props.max, Math.max(this.props.min, value))
    this.props.onChange(newValue)
  }

  increase = () => {
    this.setCnt(this.props.value + 1)
  }

  decrease = () => {
    this.setCnt(this.props.value - 1)
  }

  onChange(e) {
    //if (e.target.value === this.props.value.toString()) return
    let newValue = parseInt(e.target.value)
    this.setCnt(isNaN(newValue) ? this.props.min : newValue)
  }

  render() {
    return (
      <div>
        <button onClick={this.decrease}>-</button>
        <AppInput value={this.props.value}
          onChange={(e) => this.onChange(e)}
          ref={this.myNewRef}
          appDefaultProps={{ className: style.input }}
        />
        <button onClick={this.increase}>+</button>
      </div>
    )
  }
}
