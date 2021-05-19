import React from "react";
import SinglePage from "c/singlePage";
import style from "./sp.module.scss";

export default function (props) {
  window.scrollTo({ top: 0, behavior: "auto" });
  return (
    <div className={style["container-single-page"]} >
      <SinglePage router={props} />
    </div>
  );
}
