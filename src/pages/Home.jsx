import React from 'react';
import Hero from '../components/Home/Hero';
import Services from '../components/Home/Services';
import About from '../components/Home/about';
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import '../styles/home.css';
import Counter from '../components/Home/Counter';
import USP from '../components/Home/USP';
import Partners from '../components/Home/Partners';
import Testimonials from '../components/Home/Testimonials';
import Footer from '../common/footer'



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
    <About />
    <Counter/>
    <USP/>
    <Partners/>
    <Testimonials/>
    <Footer/>


   
  </div>
  )
}

export default Home