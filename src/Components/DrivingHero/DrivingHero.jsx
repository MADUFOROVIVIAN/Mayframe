import React from "react";
import style from "./DrivingHero.module.css";

const DrivingHero = () => {
  return (
    <div className={style.container}>
      <div className={style.topContainer}></div>

      <div className={style.heroDown}>
        <div className={style.experience}>
          <h1>15+</h1>
          <p>Over 15 years of experience </p>
        </div>
        <div className={style.experience}>
          <h1>90%</h1>
          <p>High passing rate</p>
        </div>
        <div className={style.experience}>
          <h1>200</h1>
          <p>Over 200 students taught</p>
        </div>
      </div>
    </div>
  );
};

export default DrivingHero;
