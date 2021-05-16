import React from 'react'
import PropTypes from 'prop-types'
import AppInput from './inputWithRef'

export default class extends React.PureComponent {
  static propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    onChange: PropTypes.func,
    onInput: PropTypes.func,
    value: PropTypes.number.isRequired,
  }


  input = React.createRef()

  setCnt(value) {
    const newValue = Math.min(this.props.max, Math.max(this.props.min, value))
    this.props.onChange(newValue)
    return newValue
  }

  onChange = (e) => {
    let newValue = parseInt(e.target.value)
    const realValue = this.setCnt(isNaN(newValue) ? this.props.min : newValue)
    if (realValue !== e.target.velue) {
      this.input.current.setValue(realValue)
    }
  }

  render() {
    return (
      <>
        <AppInput
          value={this.props.value}
          onChange={this.onChange}
          appDefaultProps={{ className: 'form-control', type: 'text' }}
          ref={this.input}
        />       
      </>
    )
  }
}
