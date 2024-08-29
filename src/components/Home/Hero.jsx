import React from "react";
import hero_img from '../../assets/Home/hero_img.png'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container ">
        <div className="hero-row">
          <div className="hero-text-col">
            <h1 className="hero-title">Dnore</h1>
            <p className="hero-text">All Services You Need, Under One Hood</p>
          </div>
          <img src={hero_img} alt="Hero Image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
