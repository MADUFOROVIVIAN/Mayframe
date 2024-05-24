import React from 'react'
import style from "./DrivingHero.module.css"
import Hero from "../Props/Props"
const DrivingHero = () => {
  return (
    <div className={style.container}>
        <Hero
        number1="15+"
        number2="90%"
        number3="200"
        para1="Over 15 years of experience "
        para2="High passing rate"
        para3="Over 200 students taught"
        />
    </div>
  )
}

export default DrivingHero