import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import Twitter from "../../assets/twitter.png";

const Footer = () => {
  return (
    <footer className="footer__container ">
      <Fade top>
        <h1 className="footer__title">
          Saa<span className="edit__logo">d.</span>
        </h1>
      </Fade>
      <Fade left>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>
      </Fade>
      <Fade right>
        <div className="footer__social">
          <a
            href="https:www.facebook.com/"
            className="footer__social-link"
            target="_blank"
          >
            {/* <i className='uil uil-facebook'></i> */}
            <img src={Facebook} alt="" />
          </a>

          <a
            href="https://www.instagram.com/codebysaad/"
            className="footer__social-link"
            target="_blank"
          >
            {/* <i className='uil uil-instagram'></i> */}
            <img src={Instagram} alt="" />
          </a>

          <a
            href="https://twitter.com/saadideveloper"
            className="footer__social-link"
            target="_blank"
          >
            {/* <i className='uil uil-twitter'></i> */}
            <img src={Twitter} alt="" />
          </a>
        </div>
      </Fade>

      <Fade bottom>
        <span className="footer__copy">
          &#169; Saad Khan. All rights reserved
        </span>
      </Fade>
    </footer>
  );
};

export default Footer;
