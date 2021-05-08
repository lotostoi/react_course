import React from 'react'
import PropTypes from 'prop-types'
import AppInput from './inputHook'

export default class extends React.Component {
  static propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    onChange: PropTypes.func,
    onInput: PropTypes.func,
    value: PropTypes.number.isRequired,
  }

  state = {
    cnt: this.props.value,
    inputValue: this.props.value,
  }

  setCnt(value, cb = null) {
    let newValue = parseInt(value)
    if (!isNaN(newValue)) {
      newValue = Math.min(this.props.max, Math.max(this.props.min, newValue))
    } else {
      newValue = this.props.min
    }
    this.setState({
      cnt: newValue,
      inputValue: newValue,
    })
    if (typeof cb === 'function') {
      cb(newValue)
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value != this.props.value) {
      this.setState({ cnt: this.props.value, value: this.props.value })
    }
  }

  onChange(e) {
    this.setCnt(e, this.props.onChange)
  }

  increase = () => {
    this.setCnt(this.state.cnt + 1, this.props.onChange)
  }

  decrease = () => {
    this.setCnt(this.state.cnt - 1, this.props.onChange)
  }

  render() {
    return (
      <AppInput value={this.state.inputValue} onChange={(e) => this.onChange(e)} />
    )
  }
}
