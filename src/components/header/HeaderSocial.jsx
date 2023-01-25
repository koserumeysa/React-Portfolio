import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'


const HeaderSocial = () => {
  return (
    <div className='header__social'>
      <a href="https://linkedin.com/in/rumeysakose" target="_blank" ><BsLinkedin/></a>
      <a href="https://github.com/koserumeysa" target="_blank"><FaGithub/></a>
      <a href="https://twitter.com/koserumeysaa" target="_blank"><FaTwitter/></a>
   </div>
  )
}

export default HeaderSocial