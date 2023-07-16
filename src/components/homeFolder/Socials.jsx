import React from "react";
import Instagram from "../../assets/instagram.png";
import Github from "../../assets/github.png";
import Twitter from "../../assets/twitter.png";

const Socials = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/codebysaad/"
        className="home__social-icon"
        target="_blank"
      >
        <img src={Instagram} alt="Instagram" />
        {/* <i className="uil uil-instagram"></i> */}
      </a>

      <a href="https://github.com/saadkhandeveloper" className="home__social-icon" target="_blank">
        <img src={Github} alt="Github" />
        {/* <i className="uil uil-github-alt"></i> */}
      </a>

      <a href="https://twitter.com/saadideveloper"  className="home__social-icon " target="_blank">
        <img src={Twitter} alt="Github" />
        {/* <i className="uil uil-twitter"></i> */}
      </a>
    </div>
  );
};

export default Socials;
