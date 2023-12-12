import CardMenu from "./CardMenu"
import "./Menu.css"

const Menu = () => {
  return (
    <>
    <div className="container-content-menu">
      <h3>OUR MENU</h3>
      <img src="/landing-separator-1.png" alt="" />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet rerum accusamus corporis sed, soluta autem odio reprehenderit minima atque, illum cumque quam veniam? Nisi molestiae labore vero ex.</p>
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
    </>
  )
}

export default Menu