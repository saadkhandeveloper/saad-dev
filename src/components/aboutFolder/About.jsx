import React from 'react';
import './About.css';
import AboutImg from '../../assets/about.png';
import CV from '../../assets/my-cv.pdf';
import Info from './Info';
import { Fade } from 'react-reveal';


const About = () => {
  return (
  <section className="about section" id='about'>
    <Fade top >
    <h2 className="section__title">About Me </h2>
    <span className="section__subtitle">My Introduction</span>
    </Fade>
  
  <div className="about__container container grid">
    <Fade left >
<img src={AboutImg} alt="" className="about__img" />
    </Fade>

<div className="about__data">
  <Fade right >
    <Info />
  </Fade>

<p className="about__description">
Meet Saad, a self-taught frontend developer with a passion for creating clean, intuitive and user-friendly websites that leave a lasting impression. With an eye for detail and a dedication to continuous learning, I brings a unique perspective to every project.
    </p>    
<Fade bottom >

    <a download='' href={CV} className="button button--flex">
      Download CV
      <i class='bx bx-file download__icon'></i>
    </a>
</Fade>
</div>
  </div>
  </section>
  )
}

export default About
