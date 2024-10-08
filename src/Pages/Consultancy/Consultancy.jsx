import React from 'react'
import Hero from "../../Components/ConsultHero/ConsultHero"
import ConsAbout from "../../Components/ConsAbout/ConsAbout"
import ConsService from '../../Components/ConsServices/ConsService'
import ConsRegistration from '../../Components/ConsRegistration/ConsRegistration'
const Consultancy = () => {
  return (
    <div>
        <Hero/> 
        <ConsAbout/>
        <ConsService/>
        <ConsRegistration/>
    </div>
  )
}

export default Consultancy