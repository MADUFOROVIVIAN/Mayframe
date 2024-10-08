import React from "react";
import style from "./Building.module.css";
import building from "../../Assests/building.png";

const Building = () => {
  return (
    <div className={style.container}>
      <div className={style.buildingText}>
        <h2>Building Construction</h2>
        <p>
          As a company, we provide end-to-end solutions for building projects,
          offering their expertise and services throughout the entire
          construction process. Our services include; comprehensive project
          management, design & engineering, procurement & supply chain
          management, construction execution, quality assurance and inspections
          and post-construction services.
        </p>
      </div>
      <div className={style.buildingImage}>
        <img src={building} alt="Building" />
      </div>
    </div>
  );
};

export default Building;
