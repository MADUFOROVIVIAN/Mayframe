import React from "react";
import style from "./Housing.module.css";
import housing from "../../Assests/housing.png";

const Housing = () => {
  return (
    <div className={style.container}>
      <div className={style.housingText}>
        <h2>Housing Estate Development</h2>
        <p>
          We offer a wide range of activities and offerings aimed at creating
          and managing residential communities such as land acquisition and
          planning, infrastructure development, housing construction, amenities
          and facilities, security and safety, community management, and
          environmental sustainability. We create a well-designed,
          well-maintained, and harmonious residential environment that meets the
          needs andexpectations of residents within the housing estate.
        </p>
      </div>

      <div className={style.housingImage}>
        <img src={housing} alt="Housing" />
      </div>
      
    </div>
  );
};

export default Housing;
