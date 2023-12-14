
const InformationCards = ({id, title, descriptionOne,  descriptionTwo,  descriptionThree}) => {
  return (
    <div id={id} className="container-card-informations" >
      <h3>{title}</h3>
      <p>{descriptionOne}</p>
      <p>{descriptionTwo}</p>
      <p>{descriptionThree}</p>
    </div>
  )
}

export default InformationCards