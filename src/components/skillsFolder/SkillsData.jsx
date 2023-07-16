import React from 'react'
import SkillInfo from './SkillInfo'

const SkillsData = () => {
  return (
   <div className="skills__content">
    <h3 className="skills__title">Frontend developer</h3>
<div className="skills__box grid">

 <SkillInfo
 skillName = "HTML"
 skillLevel = "Basic"
 />

 <SkillInfo
 skillName = "CSS"
 skillLevel = "Intermediate"
 /> 
 <SkillInfo
 skillName = "SCSS"
 skillLevel = "Basic"
 />



 <SkillInfo
 skillName = "Javascript"
 skillLevel = "Intermediate"
 />

<SkillInfo
 skillName = "Typescript"
 skillLevel = "Basic"
 />

<SkillInfo
 skillName = "Bootstrap"
 skillLevel = "Intermediate"
 />

 <SkillInfo
 skillName = "Tailwand "
 skillLevel = "Intermediate"
 />

 <SkillInfo
 skillName = "Git"
 skillLevel = "Basic"
 />


 <SkillInfo
 skillName = "React"
 skillLevel = "Intermedite"
 />

 <SkillInfo
 skillName = "Next "
 skillLevel = "Basic"
 />
 </div>





    
  

   </div>
  )
}

export default SkillsData
