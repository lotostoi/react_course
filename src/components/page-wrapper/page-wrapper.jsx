import React, { Component } from 'react'
import style from './page-wrapper.module.scss'


export default class extends Component {
    render() {
        return (
            <div className={style['page-wrapper']}>
                {this.props.children}
            </div>
        )
    }
}