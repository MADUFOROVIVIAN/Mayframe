import React from 'react'
import style from "./Consultancy.module.css"
import estate from "../../Assests/estate.png"
const Consultancy = () => {
  return (
    <div className={style.container}>
        <div className={style.consultancyImage}>
        <img src={estate} alt="Consultancy"/>
        </div>
        <div className={style.consultancyText}>
            <h2>Real Estate Consultancy</h2>
            <p>
            As a real estate consultancy, we provide  expert advice and guidance to individuals,
            companies, or organizations involved in real estate projects. We ensure  that clients
            can optimize their real estate investments, mitigate risks,
            and achieve their development goals effectively.  
            </p>
        </div>
    </div>
  )
}

export default Consultancy