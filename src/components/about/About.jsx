import React from 'react'
import './about.css'
import ME from '../../assets/rumeysakose_.jpg'
import {FaAward} from 'react-icons/fa'
import {FaBloggerB} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    
    <section id='about'>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
          <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_card">
          <a href="https://www.linkedin.com/in/rumeysakose/details/experience/">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Deneyim</h5>
              <small>6 Ay Entry-Level</small>
            </article>
          </a>
          <a href="https://medium.com/@rumeysakose">
            <article className='about__card'>
              <FaBloggerB className='about__icon'/>
              <h5>Blog Yazıları</h5>
              <small>10+ Blog Yazısı</small>
            </article>
          </a>
          <a href="https://github.com/koserumeysa">
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projelerim</h5>
              <small>Tamamlanan 3+</small>
            </article>
          </a>
          </div>
          <p>
          Sürekli kendimi geliştirmek ve kendimi geliştirirken çevremdekilerin de gelişmesine katkı sağlamaya çalışıyorum çünkü birleşerek yükselmenin yükselip birleşmekten çok daha faydalı olduğuna inanıyorum.
          </p>
          <p>
          Şu anda hem bilgisayar mühendisliği son sınıf öğrencisi hem de Şehir Teknolojileri Merkezinde bir Front-end geliştiricisiyim. Ayrıca proje yönetimi ve insan kaynakları alanında da minik sorumluluklar üstleniyorum. 
          </p>
          <p>
          Araştırma, iletişim ve organizasyon becerilerinde yetkin, güçlü bir takım oyuncusu olduğumu düşünüyorum.
          </p>
          <p>
          Yürümeyi, müzik dinlemeyi, fotoğraf ve video çekip düzenlemeyi, insanlarla etkileşim içerisinde olmayı, insanların kalplerine dokunmayı çok seviyorum.
          </p>

          <a href="linkedin.com/in/rumeysakose" className='btn btn-1' >Bağlantı kuralım mı?</a>
        </div>
      </div>
    </section>
    
  )
}

export default About
