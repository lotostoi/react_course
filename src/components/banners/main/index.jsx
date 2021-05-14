import React from 'react'
import style from './main.module.scss'

export default function () {
  return (
    <section className={style.banner}>
      <div className={style.banner__cont}>
        <svg width='0.167in' height='1.278in'>
          <path
            fillRule='evenodd'
            fill='rgb(241, 109, 127)'
            d='M-0.000,-0.000 L12.000,-0.000 L12.000,92.000 L-0.000,92.000 L-0.000,-0.000 Z'
          />
        </svg>
        <h1 className={style.banner__h1}>
          <span className={style.top}>The brand</span>
          <span className={style.bottom}>
            Of luxerious <span>Fashion</span>
          </span>
        </h1>
      </div>
    </section>
  )
}
