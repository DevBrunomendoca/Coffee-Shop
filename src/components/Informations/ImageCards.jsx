import React from 'react'
import "./Informations.css"

const ImageCards = ({id ,image, title}) => {
  return (
    <div id={id} className='images-cards'>
    <img src={image} alt={title} />
    </div>
  )
}

export default ImageCards