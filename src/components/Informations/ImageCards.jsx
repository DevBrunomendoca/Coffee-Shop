import React from 'react'
import "./Informations.css"

const ImageCards = ({image, title}) => {
  return (
    <div className='images-cards'>
    <img src={image} alt={title} />
    </div>
  )
}

export default ImageCards