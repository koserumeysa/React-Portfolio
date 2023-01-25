import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/rumeysaa.jpg'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <div className='header' style={{
      backgroundImage:'../../assets/cover.jfif'}}>
    <div className="container header_container">
      <h4 align="center">Hoş Geldiniz!</h4>
      <h1 align="center">Bendeniz Rumeysa</h1>
      <h5 align="center" className="text-light">Meraklı, Galatasaraylı, Hataylı Bir Yazılımcı Adayı 👩‍💻</h5>
      <CTA />
      <HeaderSocial />
      <div className='me'>
        <img className="my-image" src={ME} alt="me" />
      </div>
      <div className="container header_container"> <a href="#contact" className='scroll__down'>Scroll Down</a></div>
      </div>
    </div>
  )
}

export default Header