import React from "react";
import Error from "c/p404";
import style from "./error.module.scss";
import { useLocation } from "react-router-dom";
import { error } from "r";

export default function () {
  return error(useLocation().pathname) ? (
    <div className={style["container-error"]}>
      <Error />
    </div>
  ) : (
    ""
  );
}
