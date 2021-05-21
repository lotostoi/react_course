import React from 'react'
import PropsTypes from 'prop-types'
import style from './button.module.scss'

export default class extends React.PureComponent {
  static defaultProps = {
    disabled: false,
    title: 'button',
  }
  static propsTypes = {
    onClick: PropsTypes.func.isRequired,
    className: PropsTypes.string.isRequired,
    disabled: PropsTypes.bool.isRequired,
    title: PropsTypes.string.isRequired,
  }

  render() {
    return (
      <button className={this.props.className} onClick={() => this.props.onClick()} disabled={this.props.disabled}>
        {this.props.disabled ? (
          <div className={'spinner-border spinner-grow-sm text-secondary ' + style.spinner + ' ' + style.pink}>
            <span className='visually-hidden'></span>
          </div>
        ) : (
          <>
            <img src={require('@/assets/img/cart_white.png')} width='23' height='22' alt='cart' />
            <span>{this.props.title}</span>
          </>
        )}
      </button>
    )
  }
}
