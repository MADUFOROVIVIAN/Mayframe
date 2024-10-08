import React from "react";
import style from "./ConsultHero.module.css";
import Hero from "../Props/Props";

const ConsultHero = () => {
  return (
    <div className={style.container}>
      <div className={style.topContainer}>
        <Hero
          head="Build and Grow Your Business with Expert Guidance"
          click="Get Started"
          content="At MayFrame group, we specialized in driving transformative growth 
          and success that assist businesses in various domains.."
          number1="100k+"
          number2="150+"
          number3="15+"
          para1="Satisfied Customers"
          para2="Completed Projects"
          para3="Over 15 years of experience "
        />
      </div>
    </div>
  );
};

export default ConsultHero;
