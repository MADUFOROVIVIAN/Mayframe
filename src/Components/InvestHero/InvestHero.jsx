import React from "react";
import style from "./InvestHero.module.css";
const InvestHero = () => {
  return (
    <div className={style.container}>
      <div className={style.topContainer}>
        <div className={style.innerContainer}>
          <h2>Unlock Investment Opportunities for Financial Success</h2>
          <div className={style.btnFlex}>
            <div className={style.flex}>
              <button>Start Investing</button>
            </div>

            <p>
              Empower your financial future and embark on a journey towards
              prosperity today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestHero;
