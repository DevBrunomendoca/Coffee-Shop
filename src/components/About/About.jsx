import React from 'react'

import "./About.css"

const About = () => {
  return (
    <div className='container-about'>
      <div className='content-container-about'>
      <img src="../public/title-about.png" alt="" />
      <h3>ABOUT US</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, eos sit repellendus maxime ad deserunt nemo recusandae quisquam laboriosam doloremque minus ipsam odio nostrum eaque a cupiditate quod adipisci. Aliquid molestiae voluptatum ullam pariatur.
      </p>
      </div>
      <div className='image-container-about'>
        <img id='image-about-1' src="/image-coffee.jpg" alt="" />
        <img id='image-about-2' src="/image-bolo.jpg" alt="" />
        <img id='image-about-3' src="/img-coffe.jpg" alt="" />
        <img id='image-about-4' src="/image-coffe-2.jpg" alt="" /> 
      </div>
    </div>
  )
}

export default About