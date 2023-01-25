import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>My Portfolio</a>
      <ul className='permalinks'>
        <li><a href="#">Anasayfa</a></li>
        <li><a href="#about">Hakkında</a></li>
        <li><a href="#experience">Beceriler</a></li>
        <li><a href="#achievement">Projeler</a></li>
        <li><a href="#contact">İletişim</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://linkedin.com/in/rumeysakose" target="_blank" ><BsLinkedin/></a>
      <a href="https://github.com/koserumeysa" target="_blank"><FaGithub/></a>
      <a href="https://twitter.com/koserumeysaa" target="_blank"><FaTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Supported By Aniket Mishra</small>
      </div>

    </footer>
  )
}

export default Footer