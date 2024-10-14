import React from "react";
import style from "./AboutHero.module.css";

const AboutHero = () => {
  return (
    <div className={style.container}>
      <div className={style.topContainer}>
        <div className={style.innerContainer}>
          <h2>About Us</h2>
          <p>HOME/ABOUT US</p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
