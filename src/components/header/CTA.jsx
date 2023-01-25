import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'> 
        <a href={CV} download className='btn' >Tıkla, CV'mi İncele</a>
        <a href="#contact" className='btn btn-1'>Görüşmek ister misiniz?</a>
    </div>
  )
}

export default CTA