import React from 'react';
import "./Home.css";
import Socials from './Socials';
import Data from './Data';
import ScrollDown from './ScrollDown';
import { Fade } from 'react-reveal';

const Home = () => {
  return (
      <section className="home section" id="home">
        {/* <h1>Show notification when message is sended</h1> */}
        <div className="home__container container grid">
    
            <div className="home__content grid">
            <Fade left>
<Socials />
            </Fade>
<div className="home__img"></div>
            
    <Data />
      
            </div>
            <Fade bottom >
            <ScrollDown />
            </Fade>
        
        </div>
      </section>
  )
}

export default Home
