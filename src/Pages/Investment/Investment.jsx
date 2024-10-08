import React from 'react'
import Hero from "../../Components/InvestHero/InvestHero"
import InvestAbout from '../../Components/InvestAbout/InvestAbout'
import InvestServ from '../../Components/InvestServ/InvestServ'
import Procurement from '../../Components/Procurement/Procurement'
import InvestBen from '../../Components/InvestBen/InvestBen'
const Investment = () => {
  return (
    <div>
     <Hero/>   
     <InvestAbout/>   
     <InvestServ/> 
     <Procurement/>  
     <InvestBen/>  
    </div>
  )
}

export default Investment