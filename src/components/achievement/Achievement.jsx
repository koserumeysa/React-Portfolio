import React from 'react'
import './achievement.css'
import IMG1 from '../../assets/ctc.png'
import IMG2 from '../../assets/bisiklet.png'


const Achievement = () => {
  return (
    <section id='ahievement'>
      <h2>Projelerim</h2>

      <div className="container achievement__container">
        <article className='achievement__item'>
          <div className="achievement__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Şehir Teknolojileri Merkezi</h3>
          {/* <div className="achievement__item-cta">
          <a href="https://api.badgr.io/public/assertions/NTDkpR6BSTGXT6ZCI-maBQ?identity__email=aniketmishra492%40gmail.com" className='btn' target='_blank'>Verify</a>
          <a href="https://drive.google.com/file/d/1dzf4iV__tP5suZTHW7BIG7s9EJLnp5Ps/view?usp=sharing" className='btn btn-1' target='_blank'>Download</a>
          </div> */}
        </article>

        <article className='achievement__item'>
          <div className="achievement__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Bisiklet Sempozyumu</h3>
          {/* <div className="achievement__item-cta">
          <a href="https://github.com/Aniketmishra0/Bootstrap" className='btn' target='_blank'>View</a>
          <a href="https://github.com/Aniketmishra0/Bootstrap" className='btn btn-1' target='_blank'>Contribute</a>
          </div> */}
        </article>
      </div>
    </section>
  )
}

export default Achievement