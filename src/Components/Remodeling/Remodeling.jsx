import React from "react";
import style from "./Remodeling.module.css";
import remodeling from "../../Assests/remodeling.png";

const Remodeling = () => {
  return (
    <div className={style.container}>
      <div className={style.remodelingImage}>
        <img src={remodeling} alt="Remodeling" />
      </div>
      <div className={style.remodelingText}>
        <h2>Reconstruction and Remodeling</h2>
        <p>
          We provide comprehensive solutions for renovating and upgrading
          existing buildings or spaces. This service encompasses various
          aspects, including project planning, design, demolition, construction,
          and finishing touches, to transform an existing structure according to
          the client's requirements.
        </p>
      </div>
    </div>
  );
};

export default Remodeling;
