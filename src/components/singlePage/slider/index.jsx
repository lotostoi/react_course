import React, { useState } from "react";
import propsTypes, { func } from "prop-types";
import style from "./slider.module.scss";
import { Link } from "react-router-dom";

function slider(props) {
  const [currentSlide, setCurrentSlider] = useState(0);
  const [oldSlide, setOldSlide] = useState(0);
  const [dairection, setDairection] = useState("none");

  const getClass = (i) => {
    if (dairection == "left") {
      if (i == currentSlide) {
        return style["img-comeRight"];
      } else if (i == oldSlide) {
        return style["img-leaveRight"];
      } else {
        return "";
      }
    } else if (dairection == "right") {
      if (i == currentSlide) {
        return style["img-comeLeft"];
      } else if (i == oldSlide) {
        return style["img-leaveLeft"];
      } else {
        return "";
      }
    } else {
      if (i == currentSlide) {
        return style["img-first"];
      } else {
        return "";
      }
    }
  };

  const left = () => {
    let newCurrentSlide = currentSlide;
    setDairection("left");
    setCurrentSlider(--newCurrentSlide < 0 ? props.images.length - 1 : newCurrentSlide);
    setOldSlide(newCurrentSlide != props.images.length - 1 ? newCurrentSlide + 1 : 0);
  };

  const right = () => {
    let newCurrentSlide = currentSlide;
    setDairection("right");
    setCurrentSlider(++newCurrentSlide > props.images.length - 1 ? 0 : newCurrentSlide);
    setOldSlide(newCurrentSlide != 0 ? newCurrentSlide - 1 : props.images.length - 1);
  };

  return (
    <div className={style.slider} >
      {props.images.length > 1 ? (
        <>
          <button className={style.left} onClick={left}>
            <i className="fa fa-chevron-left"></i>
          </button>
          <button className={style.right} onClick={right}>
            <i className="fa fa-chevron-right"></i>
          </button>
        </>
      ) : (
        ""
      )}
      <div className={style.slider__cont}>
    
          {props.images.map((el, i) => (
            <div className={style.img + " " + getClass(i)} key={i}>
              <img src={el} alt="content" />
            </div>
          ))}
      
      </div>
    </div>
  );
}

slider.propsTypes = {
  images: propsTypes.array.isRequired,
};

export default slider;
/* data: {
  sliders: ['1', '2', '3', '4', '5', '6', '7'],
  currentSlide: 0,
  oldSlide: 0,
  dairection: 'none'
},
methods: {
  getCalss(i) { 
      
      if (this.dairection == 'left') {
          if (i == this.currentSlide) {
              return 'img-comeRight'
          } else if (i == this.oldSlide) {
              return 'img-leaveRight'
          } else {
              return ''
          }

      } else if (this.dairection == 'right') {
          if (i == this.currentSlide) {
              return 'img-comeLeft'
          } else if (i == this.oldSlide) {
              return 'img-leaveLeft'
          } else {
              return ''
          }

      } else {
          if (i == this.currentSlide) { return 'img-first' } else { return '' }
      }
  },
  left() {
      this.dairection = 'left'
      this.currentSlide = --this.currentSlide < 0 ? this.sliders.length - 1 : this.currentSlide
      this.oldSlide = this.currentSlide != this.sliders.length - 1 ? this.currentSlide + 1 : 0
  },
  right() {
      this.dairection = 'right'
      this.currentSlide = ++this.currentSlide > this.sliders.length - 1 ? 0 : this.currentSlide
      this.oldSlide = this.currentSlide != 0 ? this.currentSlide - 1 : this.sliders.length - 1
  }
}, */
