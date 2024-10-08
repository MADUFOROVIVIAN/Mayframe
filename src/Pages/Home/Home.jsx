import React from "react";
import Hero from "../../Components/LandingHero/LandingHero";
import Group from "../../Components/Group/Group";
import Services from "../../Components/Business/Business";
import Values from "../../Components/Values/Values";
import Competence from "../../Components/Competence/Competence";
const Home = () => {
  return (
    <div>
      <Hero />
      <Group />
      <Services />
      <Values />
      <Competence />
    </div>
  );
};

export default Home;
