import React from 'react'
import PropTypes from 'prop-types'

// input based on hooks

export default class extends React.Component {
  static defaultProps = {
    value: 0,
    onChange: function () {},
  }

  static propTypes = {
    appDefaultProps: PropTypes.object,
    value: PropTypes.number,
    onChange: PropTypes.func,
  }

  state = {
    cnt: this.props.value,
    value: this.props.value,
  }

  onChange() {
    this.setState({
      cnt: this.state.value,
    })
    this.props.onChange(this.state.value)
  }
  monitor(e) {
    this.setState({ value: e.target.value })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value != this.props.value) {
      this.setState({ cnt: this.props.value, value: this.props.value })
    }
  }

  render() {
    return (
      <input
        {...this.props.appDefaultProps}
        onChange={(e) => this.monitor(e)}
        onBlur={() => this.onChange()}
        value={this.state.value}
      />
    )
  }
}
