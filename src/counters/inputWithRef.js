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
    onChange: function () { },
  }

  static propTypes = {
    appDefaultProps: PropTypes.object,
    value: PropTypes.number,
    onChange: PropTypes.func,
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value || this.myRef.current.value != this.props.value) {
      this.myRef.current.value = this.props.value
    }
  }


  onChange(e) {
    if (e.target.value === this.props.value.toString()) return
    this.props.onChange(e)
  }

  render() {
    return <input {...this.props.appDefaultProps} defaultValue={this.props.value} onBlur={(e) => this.onChange(e)} ref={this.myRef} />
  }
}
