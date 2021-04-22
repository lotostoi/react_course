import React from 'react'
import PropTypes from 'prop-types'

// input based on hooks

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  static defaultProps = {
    value: 0,
    onChange: function () {},
  }

  static propTypes = {
    appDefaultProps: PropTypes.object,
    value: PropTypes.number,
    onChange: PropTypes.func,
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
    this.setCnt(this.state.cnt + 1)
  }

  decrease = () => {
    this.setCnt(this.state.cnt - 1)
  }

  onChange(e) {
    this.props.onChange(e.target.value)
    this.myRef.current.value = e.target.value
  }

  render() {
    return <input {...this.props.appDefaultProps} defaultValue={this.props.value} onBlur={(e) => this.onChange(e)} ref={this.myRef} />
  }
}
