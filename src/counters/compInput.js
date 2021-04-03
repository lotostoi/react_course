import React from 'react'
import PropTypes from 'prop-types'

export default class extends React.Component {
    static PropTypes = {
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        onChange: PropTypes.func,
        onInput: PropTypes.func,
        value:PropTypes.number.isRequired
    }

    state = {
        cnt: this.props.value,
        inputValue: this.props.value
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
            inputValue: newValue
        })
        if (typeof cb === 'function') {
            cb(newValue)
        }
    }

    onInput(value) {
        this.setState({ inputValue: value })
    }

    onChange() {

        this.setCnt(this.state.inputValue, this.props.onChange)
    }

    increase = () => {
        this.setCnt(this.state.cnt + 1, this.props.onChange)
    }

    decrease = () => {
        this.setCnt(this.state.cnt - 1, this.props.onChange)
    }

    render() {
        return (
            <div>
                <button onClick={this.decrease}>-</button>
                <input type='text' value={this.state.inputValue} onChange={e => this.onInput(e.target.value)} onBlur={() => this.onChange()} />
                <button onClick={this.increase}>+</button>
            </div>
        )
    }
}
