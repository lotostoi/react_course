import React from 'react'
import style from './categories.module.scss'

export default function () {
  return (
    <section className={style.category}>
    <div className={style.category__cont}>
      <div className={style.left}>
        <a href="#" className={style.prod}>
          <img
            src={require('@/assets/img/img1.png')}
            alt="img"
            className={style.big}
            width="560"
            height="542"
          />
          <div className={style.dabge}>
            <span>Hot deal</span>
            <span>For men</span>
          </div>
        </a>
        <a href="#" className={style.img}>
          <img
            src={require('@/assets/img/img3.png')}
            className={style.littel}
            alt="img"
            width="560"
            height="261"
          />
          <div className={style.dabge}>
            <span>LUXIROUS & trendy </span>
            <span>ACCESORIES</span>
          </div>
        </a>
      </div>
      <div className={style.right}>
        <a href="#" className={style.img}>
          <img
            src={require('@/assets/img/img2.png')}
            alt="img"
            className={style.littel}
            width="560"
            height="261"
          />
          <div className={style.dabge}>
            <span>30% offer</span>
            <span>Women</span>
          </div>
        </a>
        <a href="#" className={style.img}>
          <img
            src={require('@/assets/img/img4.png')}
            className={style.big}
            alt="prod"
            width="560"
            height="542"
          />
          <div className={style.dabge}>
            <span>New arrivals</span>
            <span>For men</span>
          </div>
        </a>
      </div>
    </div>
  </section>
  )
}
