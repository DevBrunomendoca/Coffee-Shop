import React, { useState } from 'react'
import "./NavBar.css"
//import React, { useRef } from 'react';

const NavBar = () => {
  const [active, setActive] = useState(false)

  const menuToggle = () => {
    setActive(!active)
    
    
    const html = document.querySelector("html")
    html.style.overflowY = active ? "initial" : "hidden"
  }

  return (
    <nav className='container-nav'>
      <div className= {active ? "mobile-menu active " : "mobile-menu "} onClick={menuToggle}>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
      <ul className={ active ? 'nav-list menuOpen' : "nav-list menuClose"}>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Menu</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  )
}

export default NavBar