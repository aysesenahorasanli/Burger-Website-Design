import React from 'react';
import AboutImage from '../image/About.png';
import '../styles/About.css';

function About() {
  return (
    <div className='about'>
      <div className='aboutLeft' style={{backgroundImage:`url(${AboutImage})`} }>
      </div>
       <div className='aboutRight'>
        <h1>Hakkımızda</h1>
        <p>En lezetli burger özel seliçilmiş şeflerimiz ile sizlerle buluşmuşstur. Dünyanın her yerinde bulunan şubelerimi ile nereye giderseniz gidin lezeetli burgerlerimizden yiyebilirsiniz.</p>
       </div>
    </div>
  )
}

export default About;