import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { Fade } from 'react-reveal';

const Contact = () => {
 const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
   
      emailjs.sendForm(
        // coppied these ids from the email js webite
        'service_0s6yb43',
       'template_87m6jv9',
        form.current,
         'JPt4AjSFNNEpvS1jQ'
         )
   e.target.reset()
    };
// Remeber emailjs.com 
  return (
    <section className="contact section" id='contact'>

          <Fade top >
           <h2 className="section__title">Get in touch</h2>
<span className="section__subtitle">Contact Me</span>
          </Fade>

<div className="contact__container container grid">
    <Fade left>

    <div className="contact__content">
        <h3 className="contact__title">Talk to me</h3>

        <div className="contact__info">
            <div className="contact__card">
                <i className='bx bx-mail-send contact__card-icon'></i>
            
            <h3 className="contact__card-title">
            Email
            </h3>
            <span className="contact__card-data">
saadkhan88249@gmail.com
            </span>

            <a href="
mailto:saadkhandeveloper.com.com" className="contact__button">Write me  {""}<i className="bx bx-right-arrow-alt contact__button-icon"></i> </a>
            </div>

            <div className="contact__card">
                <i className='bx bxl-whatsapp contact__card-icon'></i>
            
            <h3 className="contact__card-title">
            Whatsapp
            </h3>
            <span className="contact__card-data">
+923112142100
            </span>

            <a href="
https://api.whatsapp.com/send?phone=+923112142100&text=Hello, more information!" 
target='_blank' className="contact__button">Write me  {""}<i className="bx bx-right-arrow-alt contact__button-icon"></i> </a>
            </div>

            <div className="contact__card">
                <i className='bx bxl-instagram contact__card-icon'></i>
            
            <h3 className="contact__card-title">
            Instagram
            </h3>
            <span className="contact__card-data">
saad_khan_v
            </span>

            <a href="https://www.instagram.com/direct/inbox/" target='_blank'  className="contact__button">Write me  {""}<i className="bx bx-right-arrow-alt contact__button-icon"></i> </a>
            </div>
        </div>
    </div>
</Fade>
<Fade right >
    
    <div className="contact__content">
        <h3 className="contact__title">Write me your project</h3>
     
     <form  ref={form} onSubmit={sendEmail} className="contact__form">

        <div className="contact__form-div">
            <label className='contact__form-tag'>Name</label>
       <input
        type="text"
        name='name'
        className='contact__form-input'
        placeholder='Insert Your name'
        />
       
        </div>
        <div className="contact__form-div">
            <label className='contact__form-tag'>Mail</label>
       <input
        type="email"
        name='email'
        className='contact__form-input'
        placeholder='Insert Your email'
        />
        </div>

<div className="contact__form-div contact__form-area ">
            <label className='contact__form-tag'>Project</label>
  <textarea 
  name="project"
  cols='30'
  rows='10'
  className='contact__form-input'
  placeholder='Write  your project'
  ></textarea>
       
        </div>
       
        

        <button className='button button--flex'>Send Message</button>
     </form>
     
     
    </div>
  </Fade>
</div>








    </section>
  )
}

export default Contact
