import React from "react";
import style from "./Loading.module.scss";
const LoadingComponent = () => {
  return (
    <div className={style["loader-container"]}>
      <div className={style["lds-grid"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingComponent;
