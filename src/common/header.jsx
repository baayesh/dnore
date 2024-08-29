import React from "react";
import "../styles/header.css";
import logo from '../assets/logo/Dnore.png'


const Header = () => {
  return (
    <header className="header-container">
      <div className="container">
        <div className="header-content">
          <img src={logo} alt="logo" className="logo" /> 
          <nav className="nav">
            <div className="nav-list">
              <a href="/" className="nav-link">
                Home
              </a>
              <a href="/products" className="nav-link">
                Our&nbsp;Products
              </a>
              <a href="/video" className="nav-link">
                Our&nbsp;Services
              </a>
              <a href="/contact" className="nav-link">
                Office&nbsp;Spaces
              </a>
              <a href="/contact" className="nav-link">
                About&nbsp;Us
              </a>
              <a href="/contact" className="nav-link">
                Contact&nbsp;Us
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;