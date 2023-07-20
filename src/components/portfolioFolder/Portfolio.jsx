import React from 'react'
import './Portfolio.css'
import Project from './Project'
import { Fade } from 'react-reveal';
import FitnessWebImage from '../../assets/fitnesswebsite.jpg'
import TeslaImage from '../../assets/tesla.png';
import SpotifyImage from '../../assets/spotify-clone.png'; 
import AmazonImage from '../../assets/amazon.png'; 


const Portfolio = () => {
  return (
    <section className="portfolio section" id='portfolio'>
  <Fade top >
<h2 className="section__title">Portfolio</h2>
<span className="section__subtitle">My Work</span>
  </Fade>
  <Fade left>

<div className="project__container grid">

  <Project 
  image={FitnessWebImage}
  title="Fitness Website (ReactJS) "
  link='https://saadkhandeveloper.github.io/gym-website/'
  />
  <Project 
  image= {TeslaImage }
  title="Tesla Clone (ReactJs)"
  link='https://saadkhandeveloper.github.io/tesla-clone/'
  />
  <Project 
  image= {SpotifyImage }
  title="Spotify Clone (ReactJs)"
  link='https://saadkhandeveloper.github.io/spotify-clone/'
  />
  <Project 
  image= {AmazonImage }
  title="Amazon web UI (ReactJs)"
  link='https://amazonwebui.netlify.app'
  />
  <Project 
  image= {SpotifyImage }
  title="Hulu Clone (ReactJs)"
  link='https://saadkhandeveloper.github.io/spotify-clone/'
  />
</div>
  </Fade>
  </section>
  )
}

export default Portfolio
