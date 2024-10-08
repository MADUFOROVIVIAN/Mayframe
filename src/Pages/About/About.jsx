import React from 'react'
import Hero from "../../Components/AboutHero/AboutHero"
import WelcomeHero from "../../Components/WelcomeHero/WelcomeHero"
import Values from "../../Components/Values/Values"
import Competence from "../../Components/Competence/Competence"

const About = () => {
  return (
    <div>
      <Hero/>
      <WelcomeHero/>
      <Values/>
      <Competence/>
    </div>
  )
}

export default About