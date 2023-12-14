import React from 'react'
import NavBar from '../Header/NavBar'

import "./Footer.css"

const Footer = () => {
  return (
      <footer className='footer'>
        <p>© Copyright | Developed By BRUNO MENDONÇA</p> 
        
        <div className="social-medias">
          <img src="/icon-instagram.png" alt="" />
          <img src="/icon-twitter.png" alt="" />
          <img src="/icon-facebook.png" alt="" />
          <img src="/icon-linkedin.png" alt="" />
        </div>
      </footer>

  )
}

export default Footer