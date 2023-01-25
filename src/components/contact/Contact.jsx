import React from 'react'
import './contact.css'
import {GrMail} from 'react-icons/gr'
import {IoLogoTwitter} from 'react-icons/io'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';




const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_75fiyko', 'template_fr496fi', form.current, 'grPF7WVoKagMMEZVr')
      .then((result) => {
          console.log(result.text);
          console.log("Message sent");
      }, (error) => {
          console.log(error.text);
      }).then(
              message =>alert('Message Sent')
      );

      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Bağlantıda Kalalım</h5>
      <h2>İletişim Bilgilerim</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <a href="mailto:rumeysakose1010@gmail.com" target="_blank" >
          <article className="contact__option">
            <GrMail className='contact__option-icon' color='#bb7006'/>
            <h4>Email</h4>
            {/* <h5>rumeysakose1010@gmail.com</h5> */}
          </article>
          </a>

          <a href="https://twitter.com/koserumeysaa" target="_blank">
          <article className="contact__option">
            <IoLogoTwitter className='contact__option-icon' color='#bb7006'/>
            <h4>Twitter</h4>
            {/* <h5>koserumeysaa</h5> */}
          </article>
          </a>

          <a href="https://linkedin.com/in/rumeysakose" target="_blank" >
          <article className="contact__option">
            <BsLinkedin className='contact__option-icon' color='#bb7006'/>
            <h4>LinkedIn</h4>
            {/* <h5>https://linkedin.com/in/rumeysakose</h5> */}
          </article>
          </a>
            
        </div>
        {/* ===========End of Contact option ============== */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Adın' required />
          <input type="email" name='email' placeholder='Mail Adresin' />
          <textarea name="message" rows="7" placeholder='İletin' required></textarea>
          <button type='submit' className='btn btn-1'> İletiyi Gönder!</button>
        </form>
      </div>
    </section>
  )
}

export default Contact 