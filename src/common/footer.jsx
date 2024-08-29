import React from "react";
import "../styles/footer.css";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiTwitter } from "react-icons/si";


const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-main">
        <div className="footer-column">
          <h3>QUICK LINKS</h3>
          <p>Home</p>
          <p>About</p>
          <p>Video</p>
          <p>Contacts</p>
className="logo-footer" />
        </div>
        <div className="footer-column">
          <h3>SERVICES</h3>
          <p>Import Solutions</p>
          <p>Export Partnerships</p>
          <p>Flexible Office Solutions</p>
          <p>Supply Chain and Logistic Services</p>

        </div>
        <div className="footer-column">
          <h3>PRODUCTS</h3>
          <p>Best Sellers</p>
          <p>Fresh Produce</p>
          <p>Herbal Drinks</p>
          <p>Commodities</p>
          <p>Value Additions</p>
        </div>
        <div className="footer-column">
          <h3>OFFICE SPACES</h3>
          <p>Nawala</p>
          <p>Nugegoda</p>
          <div className="row footer-social">
            <div className="social-media-icon-container">
              <FaFacebookF className="social-media-icon" />
           
            
            </div>
    

            <div className="social-media-icon-container">
              <AiFillInstagram  className="social-media-icon"/>
            </div>
            <div className="social-media-icon-container">
              <FaLinkedinIn className="social-media-icon"/>
            </div>
            {/* <div className="social-media-icon-container">
              <SiTwitter className="social-media-icon"/>
            </div>  */}
          </div>
        </div>
      </div>

      <div className="footer-lastline">
        <p>
          ©2024 by Cinch Motors Limited. All Rights Reserved. Powered by: Techme
        </p>
      </div>
    </div>
  );
};

export default Footer;
