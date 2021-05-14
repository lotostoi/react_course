import React from 'react'
import style from './ulinks.module.scss'
export default function () {
  return (
    <section className={style.add}>
    <div className={style.add__cont}>
      <div className={style.add__top}>
        <div className={style.first}>
          <a className={style.add__logo} href="index.html">
            <img src={require('@/assets/img/logo.png')} alt="logo" />
            <p>BRSN<span>D</span></p>
          </a>
          <p>
            Objectively transition extensive data rather than cross functional
            solutions. Monotonectally syndicate multidisciplinary materials
            before go forward benefits. Intrinsicly syndicate an expanded array
            of processes and cross-unit partnerships.
          </p>
          <p>
            Efficiently plagiarize 24/365 action items and focused
            infomediaries. Distinctively seize superior initiatives for wireless
            technologies. Dynamically optimize.
          </p>
        </div>
        <div className={style.second}>
          <h4>Company</h4>
          <a href="#"> Home </a>
          <a href="#"> Shop </a>
          <a href="#"> About </a>
          <a href="#"> How It Works </a>
          <a href="#"> Contact </a>
        </div>
        <div className={style.third}>
          <h4>INFORMATION</h4>
          <a href="#"> Tearms & Condition </a>
          <a href="#"> Privacy Policy </a>
          <a href="#"> How to Buy </a>
          <a href="#"> How to Sell </a>
          <a href="#">Promotion</a>
        </div>
        <div className={style.fourth}>
          <h4>SHOP CATEGORY</h4>
          <a href="#"> Men </a>
          <a href="#"> Women </a>
          <a href="#"> Child </a>
          <a href="#"> Apparel </a>
          <a href="#">Brows All</a>
        </div>
      </div>
    </div>
  </section>
  )
}
