import React from 'react'
import './Skills.css'
import SkillsData from './SkillsData'
import { Fade } from 'react-reveal';


const Skills = () => {
  return (
<sections className="skills section" id="skills">
  <Fade top >
<h2 className="section__title">Skills </h2>
    <span className="section__subtitle">My technical level</span>
  </Fade>
  <Fade bottom>
  <div className="skills__container container ">
<SkillsData />
  </div>
  </Fade>
</sections>
  )
}

export default Skills
