import React from 'react';
import ContactImage from '../image/contact.jpg';
import '../styles/Contact.css';

function contact() {
  return (
    <div className='contact'>
       <div className='leftSide'   style={{backgroundImage:`url(${ContactImage}) `}}>

       </div>
       <div className='rightSide'>
          <h1>Bizimle İletişime Geçin</h1>
          <form >
            <label>Ad Soyad</label>
            <input type="text" name='name' placeholder='Lütfen Adınızı Soyadınızı Giriniz...' />

            <label>Email</label>
            <input type="email" name='email' placeholder='Lütfen Emailinizi Giriniz...' />

            <label>Mesajınızı</label>
            <textarea name='message' placeholder='Lütfen Mesajınızı Giriniz...'>
            </textarea>


          </form>
       </div> 
    </div>
  )
}

export default contact;