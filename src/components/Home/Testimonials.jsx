import React from "react";
import "../../styles/home.css";
import { HiArrowSmallLeft } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";


const Testimonials = () => {
  return (
    <section>
      <div className="testimaonials-container">
        <div className="testimonials-heading">
          <p className="tag-1">What our Customers say about us</p>
          <h1 className="heading">Testimonials</h1>
          <div className="testimonials-card-1-buttons">
            <button className="testimonials-button-1">
              <HiArrowSmallLeft className="testimonials-arrow" />
            </button>
            <button className="testimonials-button-2">
              <HiArrowSmallRight className="testimonials-arrow" />
            </button>
          </div>
        </div>
        <div className="testimonials-cards">
          {/* Card 1 */}
          <div className="testimonials-card-3 column">
            <div> </div>
            <div className="testimonials-card-3-content">
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
            <div className="testimonials-card-3-party row">
              {/* <div className="testimonials-card-2-party-img">
                <img src={person} alt="" />
              </div> */}
              <div className="column testimonials-card-3-party-content">
                <h5 className="subheading__2">Name</h5>
                <p className="tag__2">Position</p>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="testimonials-card-3 column">
            <div> </div>
            <div className="testimonials-card-3-content">
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
            <div className="testimonials-card-3-party row">
              {/* <div className="testimonials-card-3-party-img">
                <img src={person} alt="" />
              </div> */}
              <div className="column testimonials-card-3-party-content">
                <h5 className="subheading__2">Name</h5>
                <p className="tag__2">Position</p>
              </div>
            </div>
          </div>
          <div className="testimonials-card-3 column">
            <div> </div>
            <div className="testimonials-card-3-content">
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
            <div className="testimonials-card-3-party row">
              {/* <div className="testimonials-card-2-party-img">
                <img src={person} alt="" />
              </div> */}
              <div className="column testimonials-card-3-party-content">
                <h5 className="subheading__2">Name</h5>
                <p className="tag__2">Position</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
