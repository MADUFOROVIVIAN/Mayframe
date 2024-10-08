import React from 'react'
import Hero from "../../Components/PropertyHero/Property"
import About from "../../Components/PropertyAbout/PropertyAbout"
import Building from "../../Components/Building/Building"
import Remodeling from "../../Components/Remodeling/Remodeling"
import Housing from "../../Components/Housing/Housing"
import Road from "../../Components/Road/Road"
import Management from "../../Components/Management/Management"
import Consultancy from "../../Components/Consultancy/Consultancy"


const Property = () => {
  return (
    <div>
        <Hero/>
      <Building/>
      <Remodeling/>
      <Housing/>
      <Road/>
      <Management/>
      <Consultancy/>
      <About/>
    </div>
  )
}

export default Property