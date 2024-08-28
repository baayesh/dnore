import React from 'react';
import Hero from '../components/Home/Hero';
import Services from '../components/Home/Services';
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import '../styles/home.css';

const Home = () => {
  return (
    <div className="home-container">
    <div className="contact-container">
      <div className="contact-icon-div row ">
        <IoLogoWhatsapp className="contact-icon" />
        <p className="tag__1">WhatsApp </p>
      </div>
      <div className="contact-icon-div ">
        <FaPhone className="contact-icon" />
        <p className="tag__1">Mobile </p>
      </div>
    </div>
    <Hero />
    <Services />

   
  </div>
  )
}

export default Home