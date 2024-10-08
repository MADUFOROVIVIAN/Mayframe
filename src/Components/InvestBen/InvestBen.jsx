import React from "react";
import style from "./InvestBen.module.css";
import cost from "../../Assests/cost.png";
import flex from "../../Assests/flex.png";
import asset from "../../Assests/asset.png";
import risk from "../../Assests/risk.png";
import global from "../../Assests/global.png";
import portfolio from "../../Assests/portfolio.png";
const InvestBen = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>Benefits</h1>
      </div>

      <div className={style.benefits}>
        <div className={style.core}>
          <div className={style.benImage}>
            <img src={cost} alt="Benefits" />
          </div>
          <div className={style.coreText}>
            <h1>Cost Appreciation</h1>
            <p>
              If the stock's value increases over time, you can sell your shares
              at a higher price than what you paid, generating a profit.
            </p>
          </div>
        </div>

        <div className={style.core}>
          <div className={style.benImage}>
            <img src={flex} alt="Benefits" />
          </div>
          <div className={style.coreText}>
            <h1>Flexibility & Liquidity</h1>
            <p>
              You can typically buy and sell shares relatively quickly.
              liquidity provides flexibility, allowing you to adjust your
              investment positions based on changing market conditions or
              investment goals.
            </p>
          </div>
        </div>

        <div className={style.core}>
          <div className={style.benImage}>
            <img src={asset} alt="Benefits" />
          </div>
          <div className={style.coreText}>
            <h1>Asset Recovery</h1>
            <p>
              With the process of recovering lost shares, shareholders can
              regain control over their investments.
            </p>
          </div>
        </div>
      </div>

      <div className={style.benefits}>
        <div className={style.core}>
          <div className={style.coreImage}>
            <img src={risk} alt="Benefits" />
          </div>
          <div className={style.coreText}>
            <h1>Risk Mitigation</h1>
            <p>
              Your businesses can minimize disruptions and ensure continuity of
              supply by diversifying suppliers, implementing robust quality
              control measures, and monitoring supplier performance.
            </p>
          </div>
        </div>

        <div className={style.core}>
          <div className={style.benImage}>
            <img src={global} alt="Benefits" />
          </div>
          <div className={style.coreText}>
            <h1>Global Sourcing</h1>
            <p>
              You can explore global markets, identify cost-effective suppliers,
              and tap into specialized expertise or resources available in
              different regions.
            </p>
          </div>
        </div>

        <div className={style.core}>
          <div className={style.benImage}>
            <img src={portfolio} alt="Benefits" />
          </div>
          <div className={style.coreText}>
            <h1>Portfolio Diversification</h1>
            <p>
              By investing in different companies across various industries, you
              can spread your risk and reduce the impact of any single company's
              performance on your overall portfolio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestBen;
