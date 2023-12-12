import ImageCards from "./ImageCards"
import InformationCards from "./InformationCards"

const Informations = () => {
  return (
    <div className="section-informations" >
      <div className="container-informations">
      <ImageCards image="/img-info-4.jpg" />
        
        <InformationCards
          title="HOURS"
          descriptionOne="Mon - Fri // 9:00 - 23:00"
          descriptionTwo="Sat // 10:00 - 1:00"
          descriptionThree="Sun // CLOSED"

        />
        <ImageCards image="/img-info-2.jpg" />
        <ImageCards image="/img-info-3.jpg" />
      </div>
      <div className="container-informations">
        <InformationCards
          title="RESERVATIONS"
          descriptionOne="Reservation numbers:"
          descriptionTwo="+458-874-36-21"
          descriptionThree="+458-471-56-36"
        />
        <ImageCards image="/img-info-1.jpg" />
        <ImageCards image="/img-info-5.jpg" />
        <InformationCards
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