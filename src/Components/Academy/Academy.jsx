import React from "react";
import style from "./Academy.module.css";
import safety from "../../Assests/safety.png";
import briefcase from "../../Assests/briefcase.png";
import headphone from "../../Assests/headphone.png";
import chart from "../../Assests/chart.png";
import test1 from "../../Assests/test1.png";
import test2 from "../../Assests/test2.png";

const Academy = () => {
  return (
    <div className={style.container}>
      <div className={style.welcome}>
        <div className={style.top}>
          <h3>Welcome to Mayframe Driving Academy</h3>
          <p>
            Mayframe operates a leading driving academy that aims to provide
            comprehensive and professional driver training. Whether it's for
            beginners or experienced drivers looking to enhance their skills,
            the academy offers a structured curriculum and qualified instructors
            to ensure safe and confident driving. The driving academy covers
            both theoretical knowledge and practical training, equipping
            individuals with the necessary skills to navigate the roads with
            responsibility.
          </p>

          <div className={style.academyTexts}>
            <div className={style.academyText}>
              <div className={style.academyImage}>
                <img src={safety} alt="Safety" />
                <h4>Safety</h4>
              </div>
              <p2>
                We teach our students how to drive responsibly, follow traffic
                rules, and minimize risks on road.
              </p2>
            </div>
            <div className={style.academyText}>
              <div className={style.academyImage}>
                <img src={briefcase} alt="Briefcase" />
                <h4>Professionalism</h4>
              </div>
              <p2>
                We maintain high level of professionalism in all aspect of our
                operations.
              </p2>
            </div>
          </div>

          <div className={style.academyTexts}>
            <div className={style.academyText}>
              <div className={style.academyImage}>
                <img src={headphone} alt="Headphone" />
                <h4>Customer Service</h4>
              </div>
              <p2>
                We aim to be responsive, attentive, and accommodating to the
                needs and concerns of students and their families.
              </p2>
            </div>
            <div className={style.academyText}>
              <div className={style.academyImage}>
                <img src={chart} alt="Chart" />
                <div className={style.improveText}>
                  <h4>Continuous Improvement</h4>
                </div>
              </div>
              <p2>
                We stay updated with the latest traffic laws and regulations,
                incorporate new technologies, and seek feedback to enhance the
                learning experience.
              </p2>
            </div>
          </div>
        </div>
      </div>
      <div className={style.welcomeImage}>
        <img src={test1} alt="Test1" />
        <div className={style.welcomeImage2}>
          <img src={test2} alt="Test2" />
        </div>
      </div>
    </div>
  );
};

export default Academy;
