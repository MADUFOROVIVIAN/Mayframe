import React from 'react'
import style from "./Road.module.css"
import road from "../../Assests/road.png"
const Road = () => {
  return (
    <div className={style.container}>
         <div className={style.roadImage}>
        <img src={road} alt="Road"/>
        </div>
        <div className={style.roadText}>
            <h2>Road, Site and Services</h2>
            <p>
            We simplify the property development process by providing
            developers with readily available infrastructure and sites, 
            allowing them to focuson their core projects and maximize their productivity.  
            </p>
        </div>
    </div>
  )
}

export default Road 
