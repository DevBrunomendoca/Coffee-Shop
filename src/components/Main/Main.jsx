import { useEffect, useRef } from 'react'
import Typical from 'react-typical'
import { gsap } from 'gsap'

import "./Main.css"






const Main = () => {
  useEffect (() => {

    const title = titleRef.current
    //const button = buttonRef.current
    
    gsap.fromTo(title, 
      { opacity: 0, y: -120}, 
      { opacity: 1, y: 0 , duration: 1}
    )
    
    // gsap.fromTo(button, 
    //   { opacity: 0, y: -120}, 
    //   { opacity: 1, y: 0 , duration: 1}
    // )
  
  
  },[])

  const titleRef = useRef(null)
  //const buttonRef = useRef(null)

  return (
    <div className='container-main'>
      <div ref={titleRef} className="content-container">
      <h2 >COFFEE HEAVEN</h2>
      <img src="/landing-separator-1.png" alt="" />
      <p>
      <Typical
        steps={[
          'Explore a  excelência do café no Correto, onde cada xícara é uma celebração refinada do sabor e da hospitalidade. ☕'
        ]}
        />
      </p>
      <button>SHOP HERE</button>
      </div>
    </div>
  )
}

export default Main