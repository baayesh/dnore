import React from "react";
import "../../styles/home.css";
import { FaBucket } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { LuPackageCheck } from "react-icons/lu";
import { FaHouse } from "react-icons/fa6";
import { CgMenuGridR } from "react-icons/cg";
import { IoAirplaneSharp } from "react-icons/io5";
import { PiShippingContainerFill } from "react-icons/pi";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="services-container">
      <motion.div
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{once:true}}
        className="individual-service-container"
      >
        <IconContext.Provider value={{ color: "white", size: "2em" }}>
          <div className="service-icon">
          <IoAirplaneSharp />
          </div>
        </IconContext.Provider>
        <div className="service-title">
          <h4>IMPORT SOLUTIONS</h4>
        </div>
        <div className="service-description">
          <p>
            NVestibulum rutum, mi nec elementum vehicula, eros quam gravida
            nisl, id fringilla neque ante.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="individual-service-container"
        viewport={{once:true}}
      >
        <IconContext.Provider value={{ color: "white", size: "2em" }}>
          <div className="service-icon">
            <LuPackageCheck />
          </div>
        </IconContext.Provider>
        <div className="service-title">
          <h4>EXPORT PARTNERSHIPS</h4>
        </div>
        <div className="service-description">
          <p>
            NVestibulum rutum, mi nec elementum vehicula, eros quam gravida
            nisl, id fringilla neque ante.
          </p>
        </div>
      </motion.div>
      <motion.div 
          initial = {{opacity:0, scale:0.2}}
          animate = {{opacity:1, scale:1}}
          transition={{duration:0.5, delay:0.4}}
          viewport={{once:true}}
      
      className="individual-service-container">
        <IconContext.Provider value={{ color: "white", size: "2em" }}>
          <div className="service-icon">
            <FaHouse />
          </div>
        </IconContext.Provider>
        <div className="service-title">
          <h4>FLEXIBLE OFFICE SOLUTIONS</h4>
        </div>
        <div className="service-description">
          <p>
            NVestibulum rutum, mi nec elementum vehicula, eros quam gravida
            nisl, id fringilla neque ante.
          </p>
        </div>
      </motion.div>
      <motion.div 
          initial = {{opacity:0, scale:0.2}}
          animate = {{opacity:1, scale:1}}
          transition={{duration:0.5, delay:0.6}}
          viewport={{once:true}}
      
      className="individual-service-container">
        <IconContext.Provider value={{ color: "white", size: "2em" }}>
          <div className="service-icon">
          <PiShippingContainerFill />
          </div>
        </IconContext.Provider>
        <div className="service-title">
          <h4>SUPPLY CHAIN & LOGISTICS SERVICES</h4>
        </div>
        <div className="service-description">
          <p>
            NVestibulum rutum, mi nec elementum vehicula, eros quam gravida
            nisl, id fringilla neque ante.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default Services