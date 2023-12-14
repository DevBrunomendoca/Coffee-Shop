import { useRef, useLayoutEffect } from "react"
import { gsap } from "gsap/gsap-core"
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import CardMenu from "./CardMenu"

import "./Menu.css"

const Menu = () => {

  const tl = useRef(null)
  const el = useRef(null)

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger)
    gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: ".section-menu",
          start: "top bottom"
        }
      })
        .fromTo(".title-menu", {
          opacity: 0,
          y: -70
        }, {
          opacity: 1,
          y: 0,
          duration: 1
        })
        .fromTo("#img-separator-menu", {
          opacity: 0,
          y: -50
        }, {
          opacity: 1,
          y: 0,
          duration: 1
        })
        .fromTo(".paragraph-menu", {
          opacity: 0,
          y: -50
        }, {
          opacity: 1,
          y: 0,
          duration: 1
        })
        .fromTo(".card-menu", {
          opacity: 0,
          y: -50
        }, {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.5
        })

    })
    return () => {
      gsap.killTweensOf(".section-menu")
    }

  }, [])
  return (
    <section className="section-menu" ref={el}>
      <div className="container-content-menu">
        <h3 className="title-menu">OUR MENU</h3>
        <img id="img-separator-menu" src="/landing-separator-1.png" alt="" />
        <p className="paragraph-menu">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet rerum accusamus corporis sed, soluta autem odio reprehenderit minima atque, illum cumque quam veniam? Nisi molestiae labore vero ex.</p>
      </div>
      <div className="container-card-menu">
        <CardMenu
          image="/img-card-1.png"
          title="CAFE LATTE"
          paragraph="Fresh Brewed coffee and steamed milk"
          price="$3.45"
        />
        <CardMenu
          image="/img-card-2.png"
          title="ICE COFFEE"
          paragraph="Fresh Brewed coffee and steamed milk"
          price="$2.20"
        />
        <CardMenu
          image="/img-card-3.png"
          title="MOCHA"
          paragraph="Fresh Brewed coffee and steamed milk"
          price="$4.80"
        />
        <CardMenu
          image="/img-card-4.png"
          title="ESPRESSO"
          paragraph="Fresh Brewed coffee and steamed milk"
          price="$2.10"
        />
        <CardMenu
          image="/img-card-5.png"
          title="AMERICANO"
          paragraph="Fresh Brewed coffee and steamed milk"
          price="$1.50"
        />
        <CardMenu
          image="/img-card-1.png"
          title="CAFE LATTE"
          paragraph="Fresh Brewed coffee and steamed milk"
          price="$3.45"
        />
        <CardMenu
          image="/img-card-2.png"
          title="ICE COFFEE"
          paragraph="Fresh Brewed coffee and steamed milk"
          price="$4.80"
        />
        <CardMenu
          image="/img-card-3.png"
          title="MOCHA"
          paragraph="Fresh Brewed coffee and steamed milk"
          price="$2.20"
        />
        <CardMenu
          image="/img-card-4.png"
          title="ESPRESSO"
          paragraph="Fresh Brewed coffee and steamed milk"
          price="$2.10"
        />
        <CardMenu
          image="/img-card-5.png"
          title="AMERICANO"
          paragraph="Fresh Brewed coffee and steamed milk"
          price="$1.50"
        />
      </div>
    </section>
  )
}

export default Menu