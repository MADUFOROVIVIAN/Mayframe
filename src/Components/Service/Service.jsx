import React from 'react'
import style from "./Service.module.css"
import Hero from "../Props/Props"
const Service = () => {
  return (
    <div className={style.container}>
      <Hero
      head="this is the services of the website"
      click="Read More"
      content="Unleash your creativity with us and witness the remarkable 
      transformation of your visions into breathtaking reality."
      number1="345"
      number2="234"
      number3="123"
      para1="HTML"
      para2="CSS"
      para3="JAVASCRIPT"
      />  
    </div>
  )
}

export default Service