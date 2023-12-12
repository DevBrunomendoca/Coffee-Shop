
const InformationCards = ({title, descriptionOne,  descriptionTwo,  descriptionThree}) => {
  return (
    <div className="container-card-informations" >
      <h3>{title}</h3>
      <p>{descriptionOne}</p>
      <p>{descriptionTwo}</p>
      <p>{descriptionThree}</p>
    </div>
  )
}

export default InformationCards