import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Informations from "./components/Informations/Informations";
import Main from "./components/Main/Main";
import Menu from "./components/Menu/Menu";


export default function App() {
  return(
    <div className="app">
      <Header/>
      <Main/>
      <About/>
      <Menu/>
      <Informations/>
      <Contact/>
      <Footer/>
    </div>
  )
}