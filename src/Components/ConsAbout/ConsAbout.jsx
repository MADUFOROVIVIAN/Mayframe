import React from "react";
import style from "./ConsAbout.module.css";
import consAbout from "../../Assests/consAbout.png"
const ConsAbout = () => {
  return (
    <div className={style.container}>
      <div className={style.aboutText}>
        <h1>About Us</h1>
        <h2>Mayframe Consultancy</h2>
        <p>
          Mayframe has a dedicated consultancy services division that assist
          businesses in various domains. The consultancy services cover a wide
          range of areas, including strategic planning, operations management,
          financial analysis, marketing strategies, and more. By leveraging
          industry expertise and employing a result-driven approach, the
          consultancy team at Mayframe group helps businesses optimize their
          operations, overcome challenges, and achieve sustainable growth.
        </p>
      </div>
      <div className={style.aboutImage}>
        <img src={consAbout} alt="About" />
      </div>
    </div>
  );
};

export default ConsAbout;
