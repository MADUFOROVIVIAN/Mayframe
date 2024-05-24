import React from "react";
import style from "./PropertyHero.module.css";

const Property = () => {
  return (
    <div className={style.container}>
    <div className={style.topContainer}>
        <div className={style.innerContainer}>
            <h2>Where Imagination Transforms into Extraordinary Building</h2>
            <div className={style.btnFlex}>
              <div className={style.flex}>
              <button>Make Enquiry</button>
              </div>
                
                <p>
                Unleash your creativity with us and witness the remarkable 
                transformation of your visions into breathtaking reality.
                </p>
            </div>
            </div>
            </div>
            <div className={style.heroDown}>
              <div className={style.project}>
                <h1>345</h1>
                <p>Project</p>
              </div>
              <div className={style.project}>
                <h1>101</h1>
                <p>Happy Clients</p>
              </div>
              <div className={style.project}>
                <h1>124+</h1>
                <p>Total Constructions</p>
              </div>

            </div>
            
    </div>
  )
}

export default Property