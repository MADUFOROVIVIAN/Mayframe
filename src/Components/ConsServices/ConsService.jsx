import React from "react";
import style from "./ConsService.module.css";
import consBusiness from "../../Assests/consBusiness.png";
const ConsService = () => {
  return (
    <div className={style.container}>
      <div className={style.service}>
        <h1>Our Services</h1>
        <div className={style.servText}>
          <div className={style.servImage}>
            <img src={consBusiness} alt="Business" />
          </div>
          <div className={style.servText2}>
          <h2>Business Development</h2>
          <p>
            We assists businesses in achieving growth and expansion through
            strategic planning, market analysis, and relationship-building
            activities. We also act as strategic partners, helping businesses
            identify new opportunities, form strategic alliances, and enhance
            their competitive advantage.{" "}
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsService;
