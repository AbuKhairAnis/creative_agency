import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import carousel1 from "../../../images/carousel-1.png";
import carousel2 from "../../../images/carousel-2.png";
import carousel3 from "../../../images/carousel-3.png";
import carousel4 from "../../../images/carousel-4.png";
import carousel5 from "../../../images/carousel-5.png";

const Carusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: false,
  };
  return (
    <div className="bg-black flex flex-col justify-center items-center  py-24">
      <h2 className="m-24 text-white text-2xl">
        Here Are Some Of <span className="text-green-300">Our Work</span>
      </h2>
      <div className="bg-white flex justify-center items-center py-12 ">
        <div className="container">
          <Slider {...settings}>
            <div className="pr-4 rounded-md ">
              <img src={carousel1} alt="" />
            </div>
            <div className=" pr-4 rounded-md">
              <img src={carousel2} alt="" />
            </div>
            <div className=" pr-4 rounded-md">
              <img className=" h-[350px]" src={carousel3} alt="" />
            </div>
            <div className=" pr-4 rounded-md">
              <img src={carousel4} alt="" />
            </div>
            <div className=" pr-4 rounded-md">
              <img src={carousel5} alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Carusel;
