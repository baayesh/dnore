import React, { useState, useRef, useEffect } from "react";
import "../../styles/home.css";
import { FaHandPointRight } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import USP_1 from "../../assets/USP/USP_1.png";
import USP_2 from "../../assets/USP/USP_2.png";
import USP_3 from "../../assets/USP/USP_3.png";

const USP = () => {
  // use state for change state when user click on the image
  const [activeImage, setActiveImage] = useState(1);

  // change active index
  const imageHandleClick = (index) => {
    setActiveImage(index);
  };

  // Reference in viewport
  const ref = useRef(null);
  const isInView = useInView(ref)


  useEffect(() => {
    setActiveImage(1);
  }, [isInView])

  return (
    <div className="usp-main">
      <div className="usp-cta">
        <h2>
          Nelli Cola <br />
          Thal & Garak Drink
        </h2>

        <p>
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam voluptua.
        </p>
        <p>
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor sadipscing
          invidunt ut labore .
        </p>

        <button className="usp-button">
          Learn More{" "}
          <div>
            <FaHandPointRight />
          </div>{" "}
        </button>
      </div>
      <div ref={ref} className="row image__stack__container">
        <motion.img
          initial={{ opacity: 0.5, scale:0.9 }}
          whileInView={{ opacity: 1, scale:1}}
          transition={{ duration:1, delay: 1 }}
          viewport={{once:true}}
          src={USP_1}
          className={`image__stack__item image__1 ${
            activeImage === 0 ? "active" : ""
          } ${activeImage === 2 ? 'last__image':''}`}
          onMouseOver={() => imageHandleClick(0)}
        />

        <motion.img
          initial={{ opacity: 0.6 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{once:true}}
          src={USP_2}
          className={`image__stack__item image__2 ${
            activeImage === 1 ? "active" : ""
          } ${activeImage === 0 ? 'z__1':''}`}
          onMouseOver={() => imageHandleClick(1)}
        />

        <motion.img
          initial={{ scale:0.9, opacity: 0.5 }}
          whileInView={{ scale:1, opacity: 1  }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{once:true}}
          src={USP_3}
          className={`image__stack__item image__3 ${
            activeImage === 2 ? "active" : ""
          } ${activeImage === 0 ? "last__image":""}`}
          onMouseOver={() => imageHandleClick(2)}
        />
      </div>
    </div>
  );
};

export default USP;
