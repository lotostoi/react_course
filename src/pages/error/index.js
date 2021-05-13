import React from 'react'
import Error from 'c/p404'
import style from './error.module.scss'

export default function () {
  return (
    <div className={style['container-error']}>
      <Error />
    </div>
  )
}
