import { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap/gsap-core"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import "./Contact.css"

const Contact = () => {

  const tl = useRef(null)
  const el = useRef(null)

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger)
    gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: ".container-contact",
          start: "bottom 100%",
        }
      })
        .fromTo(".title-contact", {
          opacity: 0,
          y: -70
        }, {
          opacity: 1,
          y: 0,
          duration: 1.5
        })
        .fromTo(".form-control", {
          opacity: 0,
          y: -70
        }, {
          opacity: 1,
          y: 0,
          duration: 1.5
        })
    })
    return () => {
      gsap.killTweensOf(".container-contact")
    }

  }, [])
  return (
    <div className='container-contact' ref={el}> 
      <h3 className="title-contact">NEWS AS FRESH AS OUR COFFEE</h3>
      <div className='form-control'>
        <input type="email" name='email' id='email' placeholder='Your E-mail Address...'/>
        <button><img src="/icon-email.png" alt="" /></button>
      </div>
    </div>
  )
}

export default Contact