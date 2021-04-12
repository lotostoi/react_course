import React from 'react'
import PropTypes from 'prop-types'
import AppInput from './inputWithRef'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    console.log(this.props.value);
  }

  static propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    onChange: PropTypes.func,
    onInput: PropTypes.func,
    value: PropTypes.number.isRequired,
  }



  setCnt(value, cb = null) {
    let newValue = parseInt(value)
    if (!isNaN(newValue)) {
      newValue = Math.min(this.props.max, Math.max(this.props.min, newValue))
    } else {
      newValue = this.props.min
    }
    this.myRef.current.value = this.props.value
    if (typeof cb === 'function') {
      cb(newValue)
    }
  }



  onChange(e) {
    this.setCnt(e, (e) => {
      this.props.onChange(e)
    })
  }

  increase = () => {
    this.setCnt(this.state.cnt + 1, this.props.onChange)
  }

  decrease = () => {
    this.setCnt(this.state.cnt - 1, this.props.onChange)
  }

  render() {
    return <AppInput defaultValue={this.props.value} onChange={(e) => this.onChange(e)} ref={this.myRef} />
  }
}
