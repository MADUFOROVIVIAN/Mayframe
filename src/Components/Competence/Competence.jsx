import React from "react";
import style from "./Competence.module.css";
import star from "../../Assests/star.png";
import line6 from "../../Assests/line6.png";
import line7 from "../../Assests/line7.png";
const Competence = () => {
  return (
    <div className={style.container}>
      <div className={style.innerContainer}>
        <div className={style.star}>
          <div className={style.starImage}>
            <img src={star} alt="Star" />
          </div>
          <div className={style.starText}>
            <h1>Our competence is confirmed by a decade of experience</h1>
          </div>
        </div>

        <div className={style.lineImage}>
          <img src={line6} alt="Line6" />
        </div>

        <div className={style.comText}>
          <h2>125k</h2>
          <p2>
            met sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet.{" "}
          </p2>
          <div className={style.comImage}>
            <img src={line7} alt="Line7" />
          </div>
          <h2>20%</h2>
          <p2>
            met sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet.{" "}
          </p2>
        </div>
      </div>
    </div>
  );
};

export default Competence;
