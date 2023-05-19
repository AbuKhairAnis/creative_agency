import React from "react";
import Carusel from "../Carusel/Carusel";
import Hero from "../Hero/Hero";
import Icons from "../Icons/Icons";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <Icons/>
      <Services/>
      <Carusel/>
    </div>
  );
};

export default Home;
