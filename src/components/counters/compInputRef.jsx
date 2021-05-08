import React from 'react'
import PropTypes from 'prop-types'
import AppInput from './inputWithRef'
import style from './style.module.scss'

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
    console.log('inc');
    this.setCnt(this.props.value + 1)
  }

  decrease = () => {
    console.log('dec');
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
          appDefaultProps={{ className: style.input, type: 'text' }}
        />
        <button onClick={this.increase}>+</button>
      </div>
    )
  }
}
