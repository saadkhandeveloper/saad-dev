import React from 'react'

const Project = ({image, title, link}) => {
  return (
    <div className='project '>
        <div className="project__card">

      <img className='project__img' src={image} alt="" />
   <h3 className="project__title">{title}</h3>
   <a href={link} target='_blank' className="project__button">Demo <i className='bx bx-right-arrow-alt project__button-icon '>  </i> </a>
        </div>


    </div>
  )
}

export default Project
