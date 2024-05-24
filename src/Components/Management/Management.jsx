import React from 'react'
import style from "./Management.module.css"
import management from "../../Assests/management.png"
const Management = () => {
  return (
    <div className={style.container}>
    <div className={style.managementText}>
    <h2>Property Rents Management</h2>
    <p>We specialized offering within the realm of property development that focuses on managing 
    and optimizing rental properties on behalf ofproperty owners. This  is designed to streamline the 
    rental process,alleviate the burdens of property management, and ensure a smooth and profitable 
    rental experience for property owners. We offer services such as legal compliance, market analysis
    and rent optimization, tenant communication and conflict resolution, property maintenance
    and repairs, and tenant acquisition and screening. </p>
</div>
<div className={style.managementImage}>
<img src={management} alt="Management" />
</div>
    </div>
  )
}

export default Management