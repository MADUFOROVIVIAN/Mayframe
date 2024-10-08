import React from "react";
import style from "./Values.module.css";
import Honesty from "../../Assests/Honesty.png";
import team from "../../Assests/team.png";
import liberty from "../../Assests/liberty.png";
import communication from "../../Assests/communication.png";
import quality from "../../Assests/quality.png";
import spirit from "../../Assests/spirit.png";
const Values = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>Our Core Values</h1>
      </div>

      <div className={style.values}>
        <div className={style.core}>
          <div className={style.coreImage}>
            <img src={Honesty} alt="Honesty" />
          </div>
          <div className={style.coreText}>
            <h1>Honesty</h1>
            <p>
              For us as a company, it is very important that the information
              provided to our customer is honest and true. This value is what
              makes us different and help us to make decisions based on firm and
              true facts.
            </p>
          </div>
        </div>

        <div className={style.core}>
          <div className={style.coreImage}>
            <img src={team} alt="Team" />
          </div>
          <div className={style.coreText}>
            <h1>Teamwork</h1>
            <p>
              We built a team that works result-oriented, unifying talent and
              give and take to respect and join different opinions, knowledge
              and abilities because teamwork and mutual support build the
              foundation of our relationship.
            </p>
          </div>
        </div>

        <div className={style.core}>
          <div className={style.coreImage}>
            <img src={liberty} alt="Liberty" />
          </div>
          <div className={style.coreText}>
            <h1>Liberty</h1>
            <p>
              Our team member must show loyalty, referring to faithfulness,
              commitment, and interest defense in any moment for and in the name
              of the company.
            </p>
          </div>
        </div>
      </div>

      <div className={style.values}>
        <div className={style.core}>
          <div className={style.coreImage}>
            <img src={communication} alt="Communication" />
          </div>
          <div className={style.coreText}>
            <h1>Communication</h1>
            <p>
              Each one of us must interact transparently and appropriately,
              trying to strengthen our interpersonal relations and the image of
              the company.
            </p>
          </div>
        </div>

        <div className={style.core}>
          <div className={style.coreImage}>
            <img src={quality} alt="Quality" />
          </div>
          <div className={style.coreText}>
            <h1>Service Quality</h1>
            <p>
              Service quality is one of our most important values which demands
              all our effort, determination and courage to be successful in what
              we are doing and the services we are providing.
            </p>
          </div>
        </div>

        <div className={style.core}>
          <div className={style.coreImage}>
            <img src={spirit} alt="Spirit" />
          </div>
          <div className={style.coreText}>
            <h1>Constructive Spirit</h1>
            <p>
              Our constructive spirit refers to a positive attitude, optimism,
              increase of value chain, creativity and good faith that must be
              shown and live by those who work in our company.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
