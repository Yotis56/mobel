import { useContext } from "react"
import { Hero } from "../../components/Hero/Hero"
import { Contact } from "../../components/Contact/Contact"
import heroImage from '../../assets/images/Kitchen1-1024.jpg'
import heroImageSmall from '../../assets/images/Kitchen1-768.jpg'
import { AppContext } from "../../context/AppContext"

const HomeHogar = () => {
  
  const width = useContext(AppContext)

  const title = '¿Tienes una Remodelación Pendiente?'
  const paragraph = 'Somos una empresa de diseño de interiores y mobiliario, expertos en remodelaciones de espacios.'
    return (
      <>
        <Hero image={width > 768? heroImage : heroImageSmall} title={title} paragraph={paragraph} />
        <Contact />
      </>
    )
}
  
export { HomeHogar }