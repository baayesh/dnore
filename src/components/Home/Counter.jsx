import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "../../styles/home.css";
import { motion } from "framer-motion";

const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div>
        <div className="counter-container container row">
          <motion.div
            initial={{ opacity: 0, scale: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="row counter__individual "
            style={{ overflow: "hidden" }}
          >
            <h6 className="counter-number ">
              {counterOn && (
                <CountUp start={0} end={20} duration={3} delay={0} />
              )}
            </h6>
            <h4 className="counter-title">AWARDS</h4>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="row counter__individual "
            style={{ overflow: "hidden" }}
          >
            <h6 className="counter-number ">
              {counterOn && (
                <CountUp start={0} end={20} duration={3} delay={0} />
              )}
            </h6>
            <h4 className="counter-title">PRODUCTS</h4>
          </motion.div>
          <motion.div
          initial={{ opacity: 0, scale: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
            className="row counter__individual"
            style={{ overflow: "hidden" }}
          >
            <h6 className="counter-number ">
              {counterOn && (
                <CountUp start={0} end={15} duration={3} delay={0} />
              )}
            </h6>
            <h4 className="counter-title">PARTNERS</h4>
          </motion.div>
          <motion.div
          initial={{ opacity: 0, scale: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
            className="row counter__individual"
            style={{ overflow: "hidden" }}
          >
            <h6 className="counter-number ">
              {counterOn && (
                <CountUp start={0} end={10} duration={3} delay={0} />
              )}
            </h6>
            <h4 className="counter-title">LOCATIONS</h4>
          </motion.div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Counter;
