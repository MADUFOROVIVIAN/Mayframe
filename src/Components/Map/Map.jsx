import React from 'react'
import style from "./Map.module.css"
import map from "../../Assests/map.png"
const Map = () => {
  return (
    <div className={style.container}>
<div className={style.mapText}>
<h1>Visit Us</h1>
<p>Address:</p>
<p2>Osun State, Nigeria.</p2>
</div>
<div className={style.mapImage}>
 <img src={map} alt="Map" />   
</div>
    </div>
  )
}

export default Map