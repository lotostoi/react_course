import React from 'react'
import PropTypes from 'prop-types'
import AppInput from './inputWithRef'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.myNewRef = React.createRef()
  }

  static propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    onChange: PropTypes.func,
    onInput: PropTypes.func,
    value: PropTypes.number.isRequired,
  }

  setCnt(value) {
    let newValue = parseInt(value)
    if (!isNaN(newValue)) {
      newValue = Math.min(this.props.max, Math.max(this.props.min, newValue))
    } else {
      newValue = this.props.min
    }
    return newValue
  }

  increase = () => {
    this.setCnt(this.state.cnt + 1, this.props.onChange)
  }

  decrease = () => {
    this.setCnt(this.state.cnt - 1, this.props.onChange)
  }

  onChange(e) {
    console.log('eeeeeeeeeeeeeeee');
    this.myNewRef.current.value = this.setCnt(e)
    console.log(this.myNewRef);
    this.props.onChange(this.myNewRef.current.value)
  }



  render() {
    return <AppInput value={this.props.value} onChange={(e) => this.onChange(e)} ref={this.myNewRef} />
  }
}
