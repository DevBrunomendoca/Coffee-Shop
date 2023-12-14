import { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap/gsap-core"
import { ScrollTrigger } from 'gsap/ScrollTrigger'


import ImageCards from "./ImageCards"
import InformationCards from "./InformationCards"


const Informations = () => {

  const tl = useRef(null)
  const el = useRef(null)

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger)
    gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: ".section-informations",
          start: "top bottom"
        }
      })
        .fromTo("#image-card-1", {
          opacity: 0,
          x: -80
        }, {
          opacity: 1,
          x: 0,
          duration: 1
        })
        .fromTo("#informations-card-1", {
          opacity: 0,
          x: -80
        }, {
          opacity: 1,
          x: 0,
          duration: 0.8
        })
        .fromTo("#image-card-2", {
          opacity: 0,
          x: -80
        }, {
          opacity: 1,
          x: 0,
          duration: 0.8
        })
        .fromTo("#image-card-3", {
          opacity: 0,
          x: -80
        }, {
          opacity: 1,
          x: 0,
          duration: 0.8
        })
        .fromTo("#informations-card-2", {
          opacity: 0,
          x: -80
        }, {
          opacity: 1,
          x: 0,
          duration: 1
        })
        .fromTo("#image-card-4", {
          opacity: 0,
          x: -80
        }, {
          opacity: 1,
          x: 0,
          duration: 0.8
        })
        .fromTo("#image-card-5", {
          opacity: 0,
          x: -80
        }, {
          opacity: 1,
          x: 0,
          duration: 0.8
        })
        .fromTo("#informations-card-3", {
          opacity: 0,
          x: -70
        }, {
          opacity: 1,
          x: 0,
          duration: 0.8
        })


    })
    return () => {
      gsap.killTweensOf(".section-informations")
    }

  }, [])


  return (


    

    <div className="section-informations" ref={el}>
      <div className="container-informations">
      <ImageCards id="image-card-1" image="/img-info-4.jpg" />
        
        <InformationCards
          id="informations-card-1"
          title="HOURS"
          descriptionOne="Mon - Fri // 9:00 - 23:00"
          descriptionTwo="Sat // 10:00 - 1:00"
          descriptionThree="Sun // CLOSED"

        />
        <ImageCards id="image-card-2" image="/img-info-2.jpg" />
        <ImageCards id="image-card-3" image="/img-info-3.jpg" />
      </div>
      <div className="container-informations">
        <InformationCards
          id="informations-card-2"
          title="RESERVATIONS"
          descriptionOne="Reservation numbers:"
          descriptionTwo="+458-874-36-21"
          descriptionThree="+458-471-56-36"
        />
        <ImageCards id="image-card-4" image="/img-info-1.jpg" />
        <ImageCards id="image-card-5" image="/img-info-5.jpg" />
        <InformationCards
          id="informations-card-3"
          title="STORES"
          descriptionOne="Dunsmuir Ave"
          descriptionTwo="Atkins Ave"
          descriptionThree="Milk Street"
        />
      </div>

    </div>

  )
}

export default Informations