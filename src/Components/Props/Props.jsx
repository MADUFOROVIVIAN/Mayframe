import React from "react";
import style from "./Props.module.css";
const Props = (Props) => {
  return (
    <div className={style.container}>
      <div className={style.topContainer}>
        <div className={style.innerContainer}>
          <h2>{Props.head}</h2>
          <div className={style.btnFlex}>
            <div className={style.flex}>
              <button>{Props.click}</button>
            </div>

            <p>{Props.content}</p>
          </div>
        </div>
      </div>

      <div className={style.heroDown}>
        <div className={style.project}>
          <h1>{Props.number1}</h1>
          <p>{Props.para1}</p>
        </div>
        <div className={style.project}>
          <h1>{Props.number2}</h1>
          <p>{Props.para2}</p>
        </div>
        <div className={style.project}>
          <h1>{Props.number3}</h1>
          <p>{Props.para3}</p>
        </div>
      </div>
    </div>
  );
};

export default Props;
