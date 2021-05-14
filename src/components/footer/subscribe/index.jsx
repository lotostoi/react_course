import React from 'react'
import style from './subscribe.module.scss'
export default function () {
  return (
    <section className={style.subscribe}>
      <div className={style.subscribe__cont}>
        <div className={style.left}>
          <img src={require('@/assets/img/sub.png')} width='83' height='83' alt='photo' />
          <div>
            <p>
              “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum a. Aliquam
              condimentum mattis neque sed pretium”
            </p>
            <span>Bin Burhan</span>
            <span>Dhaka, Bd</span>
            <div className={style.right}>
              <div data-id='1'></div>
              <div data-id='2'></div>
              <div data-id='3'></div>
            </div>
          </div>
        </div>

        <div className={style.right}>
          <h5>Subscribe</h5>
          <p>FOR OUR NEWLETTER AND PROMOTION</p>
          <div className={style.email}>
            <input type='email' name='email' id='email' placeholder='Enter Your Email' />
            <button type='submit'>Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  )
}
