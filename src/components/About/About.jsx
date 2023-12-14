import React from 'react'
import { gsap } from 'gsap/gsap-core'
import { useLayoutEffect, useRef } from 'react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

import "./About.css"

const About = () => {
  
  const tl = useRef(null)
  const el = useRef(null)

useLayoutEffect(() => {
  //const time = gsap.timeline({defaults: {duration: 1}})

  gsap.registerPlugin(ScrollTrigger) 
  gsap.context(() => {
  tl.current = gsap.timeline({
    scrollTrigger: {
      trigger: ".container-about",
      start: "top center"
    }
  })
  .fromTo("#image-about", {
    opacity: 0,
    y: -100
  }, {
    opacity: 1,
    y: 0,
    duration: 1.2
  })
  .fromTo(".h3", {
    opacity: 0,
    y: -70
  }, {
    opacity: 1,
    y: 0,
    duration: 1.2
  })
  .fromTo("#paragraph-about", {
    opacity: 0,
    y: -70
  }, {
    opacity: 1,
    y: 0,
    duration: 1.2
  })
  .fromTo("#image-about-1", {
    opacity: 0,
    x: -30,
    y: -30
  }, {
    opacity: 1,
    x: 0,
    y: 0,
    duration: 0.8
  })
  .fromTo("#image-about-2", {
    opacity: 0,
    x: -30,
    y: -30
  }, {
    opacity: 1,
    x: 0,
    y: 0,
    duration: 0.8
  })
  .fromTo("#image-about-3", {
    opacity: 0,
    x: -30,
    y: -30
  }, {
    opacity: 1,
    x: 0,
    y: 0,
    duration: 0.8
  })
  .fromTo("#image-about-4", {
    opacity: 0,
    x: -30,
    y: -30
  }, {
    opacity: 1,
    x: 0,
    y: 0,
    duration: 0.8
  })
})
return () => {
  gsap.killTweensOf(".container-about")
}

}, [])
  
  return (
    <div ref={el} className='container-about'>
      <div className='content-container-about'>
      <img id='image-about' src="/title-about.png" alt="" />
      <h3 className='h3'>ABOUT US</h3>
      <p id='paragraph-about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, eos sit repellendus maxime ad deserunt nemo recusandae quisquam laboriosam doloremque minus ipsam odio nostrum eaque a cupiditate quod adipisci. Aliquid molestiae voluptatum ullam pariatur.
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