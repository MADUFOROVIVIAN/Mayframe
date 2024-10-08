import React from "react";
import style from "./ConsRegisration.module.css";
import conReg from "../../Assests/conReg.png";
import bullet from "../../Assests/bullet.png";

const ConsRegistration = () => {
  return (
    <div className={style.container}>
      <div className={style.regText}>
        <h1>Company Registration</h1>
        <p>
          We assist in business registration through corporate affairs
          commission (CAC). We assist businesses in navigating the complex
          process of company formation and ensure compliance with legal and
          regulatory requirements. Our registration services include:
        </p>

        <div className={style.regText2}>
          <div className={style.regText2Image}>
            <img src={bullet} alt="Icon" />
          </div>
          <p2>Limited Liability Registration</p2>
        </div>

        <div className={style.regText2}>
          <div className={style.regText2Image}>
            <img src={bullet} alt="Icon" />
          </div>
          <p2>Cooperative Society Registration</p2>
        </div>

        <div className={style.regText2}>
          <div className={style.regText2Image}>
            <img src={bullet} alt="Icon" />
          </div>
          <p2>Mosque Registration</p2>
        </div>

        <div className={style.regText2}>
          <div className={style.regText2Image}>
            <img src={bullet} alt="Icon" />
          </div>
          <p2>Church Registration</p2>
        </div>

        <div className={style.regText2}>
          <div className={style.regText2Image}>
            <img src={bullet} alt="Icon" />
          </div>
          <p2>Association Registration</p2>
        </div>

        <div className={style.regText2}>
          <div className={style.regText2Image}>
            <img src={bullet} alt="Icon" />
          </div>
          <p2>Business Name Registration</p2>
        </div>

        <div className={style.regText2}>
          <div className={style.regText2Image}>
            <img src={bullet} alt="Icon" />
          </div>
          <p2>NGO Registration</p2>
        </div>

        <div className={style.regText2}>
          <div className={style.regText2Image}>
            <img src={bullet} alt="Icon" />
          </div>
          <p2>Company annual returns & Reactivation of Inactive Company</p2>
        </div>
      </div>
      <div className={style.regImage}>
        <img src={conReg} alt="Registration" />
      </div>
    </div>
  );
};

export default ConsRegistration;
