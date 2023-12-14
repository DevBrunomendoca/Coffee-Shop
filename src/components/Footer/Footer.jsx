import { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap/gsap-core"
import { ScrollTrigger } from "gsap/ScrollTrigger"


import "./Footer.css"

const Footer = () => {
  const tl = useRef(null)
  const el = useRef(null)

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger)
    gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: ".footer",
          start: " bottom 1500px",
          markers: true
        }
      })
        .fromTo(".paragraph-footer", {
          opacity: 0,
          y: -70
        }, {
          opacity: 1,
          y: 0,
          duration: 1.2
        })
        .fromTo(".social-medias", {
          opacity: 0,
          y: -70
        }, {
          opacity: 1,
          y: 0,
          duration: 1.5
        })
    })
    return () => {
      gsap.killTweensOf(".footer")
    }

  }, [])
  return (
      <footer className='footer' ref={el}>
        <p className="paragraph-footer">© Copyright | Developed By BRUNO MENDONÇA</p> 
        
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