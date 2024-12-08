import React from 'react';
import {Link} from 'react-router-dom';
import AnasayfaImage from '../image/burger.jpg';
import '../styles/Home.css';


function Home() {
  return (
    <div className='mainPage' style={{backgroundImage: `url(${AnasayfaImage})` }} >
       <div className='order'>
        <Link to="/menu">
           <button>SİPARİŞ VER</button>
        </Link>
       </div>
    </div>
  )
}

export default Home;