import React from 'react'
import "./Testimonial.css"
import { Data } from './Data'
import { Fade } from 'react-reveal';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";


const Testimonial = () => {
  return (
    
    <section className="testimonial container section" id='testimonials'>
   <Fade top>
    <h2 className="section__title">My clients say</h2>
<span className="section__subtitle">Testimonials {"(These are not real)"}</span>
    </Fade>

<Fade bottom >

 <Swiper
loop={true}
grabCursor={true}
 spaceBetween={24}
 pagination={{
   clickable: true,
 }}
 breakpoints={{
   576: {
     slidesPerView: 2,
   },
   768: {
     slidesPerView: 2,
     spaceBetween: 48,
   },
   
  }}
 modules={[Pagination]}
 className="testimonial__container">
     {Data.map(({id,image,title,description}) => {
        return (
         <SwiperSlide className='testimonial__card' key={id}>
<img src={image} alt="" 
className='testimonial__img' 
/>

<h3 className="testimonial__name">
    {title}
</h3>

<p className="testimonial__description">
    {description}
</p>
         </SwiperSlide>
        )
     })}
 </Swiper>
        </Fade>
 
 
 
 </section>
  )
}

export default Testimonial
