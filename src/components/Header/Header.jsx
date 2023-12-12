import React from 'react'
import NavBar from './NavBar'

import "./Header.css"

const Header = () => {
  return (
    <div className='container-header'>
    <img src="/logo-coffee.png" alt="" /> 
    <NavBar />
    </div>
  )
}

export default Header