import React from 'react'
import style from './error.module.scss'
import { Link } from 'react-router-dom'
import { routesMap } from 'r'


export default function () {
  return (
    <div className={style['cont-alert'] + ' alert alert-warning '}>
      <span>404</span>
      <strong className={style.link}>
        Back to - <Link to={routesMap('home')}>Home page</Link>
      </strong>
    </div>
  )
}
