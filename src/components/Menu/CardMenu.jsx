
const CardMenu = ({ image, title, paragraph, price }) => {
  return (
    <div className="card-menu">
      <img src={image} alt={title} />
      <div>
        <h4>{title}</h4>
        <p>{paragraph}</p>
      </div>
      <span>{price}</span>
    </div>
  )
}

export default CardMenu