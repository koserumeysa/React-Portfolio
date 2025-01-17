import React from 'react'
import './experience.css'
import {IoLogoHtml5} from 'react-icons/io'
import {SiCss3} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {FaJava} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {IoLogoPython} from 'react-icons/io'
import {SiGooglecloud} from 'react-icons/si'
import {SiJupyter} from 'react-icons/si'
import {SiFlutter} from 'react-icons/si'
import {SiAndroidstudio} from 'react-icons/si'


const Experience = () => {
  return (
    <section id='experience'>
      <h2>Becerilerim</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          {/* <h3>Frontend Developer</h3> */}
          
          <div className="experience__content">
            <article className='experience__details'>
            <IoLogoHtml5 size="1.5em" color='#ff5722'/>
            <h4>HTML</h4>
            <small className='text-light'>Intermediate</small>
            </article>

            <article className='experience__details'>
            <SiCss3 size="1.5em" color='#0027ff'/>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
            </article>

            <article className='experience__details'>
            <FaReact size="1.5em" color='#00A3FF'/>
            <h4>React</h4>
            <small className='text-light'>Intermediate</small>
            </article>

            <article className='experience__details'>
            <IoLogoJavascript size="1.5em" color="#FFEF06"/>
            <h4>Javascript </h4>
            <small className='text-light'>Intermediate</small>
            </article>

            <article className='experience__details'>
            <FaJava size="1.5em" color="#FFEF06"/>
            <h4>Java</h4>
            <small className='text-light'>Beginner</small>
            </article>

            <article className='experience__details'>
            <IoLogoPython size="2.2em" color='#FFC107'/>
            <h4>Python</h4>
            <small className='text-light'>Beginner</small>
            </article>

            <article className='experience__details'>
            <BsGithub size="1.9em" color='#000000'/>
            <h4>Git</h4>
            <small className='text-light'>Beginner</small>
            </article>

            <article className='experience__details'>
            <SiGooglecloud size="1.5em"color='#cdb908'/>
            <h4>Google Cloud Platform</h4>
            <small className='text-light'>Beginner</small>
            </article>

            <article className='experience__details'>
            <SiAndroidstudio size="1.9em" color='#109C12'/>
            <h4>Android Studio</h4>
            <small className='text-light'>Beginner</small>
            </article>

            <article className='experience__details'>
            <SiJupyter size="1.9em" color='#FCCB00'/>
            <h4>Jupyter Notebook</h4>
            <small className='text-light'>Beginner</small>
            </article>

            <article className='experience__details'>
            <SiFlutter size="1.8em" color='#03a9f4'/>
            <h4>Flutter</h4>
            <small className='text-light'>Beginner</small>
            </article>

          </div>
        </div>
      </div>
     </section>
  )
  }

export default Experience
