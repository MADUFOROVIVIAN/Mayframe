import React from "react";
import style from "./LandingHero.module.css";
const LandingHero = () => {
  return (
    <div className={style.container}>
      <div className={style.innerContainer}>
        <h2>Build and Grow Your Business with Expert Guidance</h2>
        <p>
          At MayFrame group, we specialized in driving transformative growth and
          success that assist businesses in various domains.
        </p>
        <div className={style.innerButton}>
          <button>Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;