import React from "react";
import style from "./Group.module.css";
import welcome from "../../Assests/welcome.png"
import { Link } from "react-router-dom";
const Group = () => {
  return (
    <div className={style.container}>
      <div className={style.groupImage}>
        <img src={welcome} alt="Welcome" />
      </div>
      <div className={style.groupText}>
        <h1>About Us</h1>
        <h2>Welcome to MayFrame Group</h2>
        <p>
          At Mayframe, we are committed to providing a wide range of exceptional
          services to meet your diverse needs, Whether you're looking to enhance
          your driving skills, seeking expert consultancy services, exploring
          the world of farms and agriculture, or venturing into investment and
          property, we have you covered.
        </p>
        <div className={style.groupButton}>
        <Link to="/about">
              <button>Learn more</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Group;
