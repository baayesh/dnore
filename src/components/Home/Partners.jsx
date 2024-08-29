import React from "react";
import "../../styles/home.css";
import brand from '../../assets/Home/brand.png'

const Partners = () => {
  return (
    <section>
      <div className="row container partners__container">
      <div className="column partners__left">
            <p className="tag-1">We are reliable dealers</p>
          <h4 className="heading">Partners Working with Us</h4>
          <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="column partners__right">
            <div className="row partners__right__container">
                <img src={brand} alt="brand" />
                <img src={brand} alt="brand" />
                <img src={brand} alt="brand" />
                <img src={brand} alt="brand" />
            </div>
            <div className="row">
                <img src={brand} alt="brand" />
                <img src={brand} alt="brand" />
                <img src={brand} alt="brand" />
                <img src={brand} alt="brand" />
            </div>
        </div>

      </div>
    </section>
  );
};

export default Partners;