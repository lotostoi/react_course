import React from 'react'
import style from './bottom.module.scss'
export default function () {
  return (
    <footer className={style.footer}>
    <div className={style.footer__cont}>
      <p>&copy; 2017 Brand All Rights Reserved.</p>
      <div>
        <a href="#"><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
        <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
        <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
        <a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
        <a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
      </div>
    </div>
  </footer>
  )
}
