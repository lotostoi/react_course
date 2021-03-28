import React from 'react'
import PropTypes from 'prop-types'

export default class extends React.Component {


    static propTypes = {
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        cnt: PropTypes.number.isRequired
    }

    state = {
        inputValid: this.props.min
    };


    increase = () => {
        this.setState({
            inputValid: this.inputValid + 1
        })
    }
    decrease = () => {
        this.setState({
            inputValid: this.inputValid - 1
        })
    }

    change = (e) => {

    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.decrease} >-</button>
                    <input type='text' value={this.props.cnt} onChange={this.change} /*onBlur={connect} */ />
                    <button onClick={this.increase}>+</button>
                </div>
            </div>
        )
    }
}