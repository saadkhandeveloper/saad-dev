import React from 'react';
import BlueTick from '../../assets/blue-tick.png'

const SkillInfo = ({skillName, skillLevel}) => {
  return (
    <div>
         <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
            {/* <i class='bx bx-badge-check'></i> */}
            <img className='skills__blue-tick' src={BlueTick} alt="" />
           
           <div>
            <h3 className="skill__name">{skillName}</h3>
            <span className="skill__level">{skillLevel}</span>
           </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SkillInfo
