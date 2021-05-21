import React from 'react'
import PropsTypes from 'prop-types'
import style from './good.module.scss'

import { HashLink } from 'react-router-hash-link'

import Button from 'c/buttons/addRemove'

function good(props) {

  return (
    <div className={style.goods__good}>
      <div className={style.img}>
        <img
          src={typeof props.good.img === 'string' ? props.good.img : props.good.img[0]}
          width='261'
          height='279'
          alt='good'
        />
        <div className={style.contCart}>
          <Button
            title='Add to Cart'
            change={props.isToCart}
            add={()=>props.addToCart(props.good)}
            remove={()=>props.removeFromCart(props.good)}
            className={style.add}
            disabled={props.isDisabled}
          />
        </div>
      </div>
      <HashLink to={`/catalog-list/${props.good.id}`}>{props.good.title}</HashLink>
      <span>$ {props.good.price} </span>
    </div>
  )
}

good.propsTypes = {
  good: PropsTypes.object.isRequired,
  isInCart: PropsTypes.bool.isRequired,
}

export default good
