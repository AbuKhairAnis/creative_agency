import React from "react";
import bg from "../../../images/Untitled-1.png";
import Frame from "../../../images/logos/Frame.png";
import Button from "../../../utils/Button";

const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen "
        style={{ background: `url(${bg})`, backgroundSize: "cover" }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={Frame} className="min-w-[250px] rounded-lg" alt="" />
          <div className="mx-12 ">
            <h1 className="text-5xl font-bold">Let's Grow Your Brand To The Next Level</h1>
            <p className="py-6 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsum, sunt itaque repellendus consequatur temporibus?
            </p>
            <Button> Hire us</Button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
