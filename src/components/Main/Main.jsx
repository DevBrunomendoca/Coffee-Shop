import {  useLayoutEffect, useRef} from 'react'
import Typical from 'react-typical'
import { gsap } from 'gsap'

import "./Main.css"

const Main = () => {
  useLayoutEffect(() => {

    const title = titleRef.current
    
    gsap.fromTo(title, 
      { opacity: 0, y: -120}, 
      { opacity: 1, y: 0 , duration: 1}
    )
  },[])
  const titleRef = useRef(null)

  return (
    <div className='container-main'>
      <div ref={titleRef} className="content-container">
      <h2 >COFFEE HEAVEN</h2>
      <img src="/landing-separator-1.png" alt="" />
      <Typical
        steps={[
          'Explore a  excelência do café no Correto, onde cada xícara é uma celebração refinada do sabor e da hospitalidade. ☕'
        ]}
        />
      <button>SHOP HERE</button>
      </div>
    </div>
  )
}

export default Main