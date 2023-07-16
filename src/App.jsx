import React from 'react';
import './App.css';
import Header from './components/headerFolder/Header';
import Home from './components/homeFolder/Home';
import About from './components/aboutFolder/About';
import Skills from './components/skillsFolder/Skills';
import Portfolio from './components/portfolioFolder/Portfolio';
import Testimonial from './components/testimonialFolder/Testimonial';
import Contact from './components/contactFolder/Contact';
import Footer from './components/footerFolder/Footer';
import ScrollUp from './components/scrollFolder/ScrollUp';
import Mouse from './components/MouseFolder/Mouse';


function App() {
  return (
<>
{/* <Mouse /> */}
<Header />
<main className="main">
 <Home />
     <About />
    <Skills />
<Portfolio />
<Testimonial />
<Contact />
</main>
<Footer />
<ScrollUp />
</>
  );
}

export default App;
 