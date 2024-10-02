import { useContext } from "react"
import { Header } from "../../components/Header/Header"
import { Contact } from "../../components/Contact/Contact"
import { WaButton } from '../../components/WaButton/WaButton'
import heroImage from '../../assets/images/Kitchen1-1024.jpg'
import heroImageSmall from '../../assets/images/Kitchen1-768.jpg'
import { AppContext } from "../../context/AppContext"

const HomeHogar = () => {
  
  const width = useContext(AppContext)

  const title = '¿Tienes una remodelación pendiente?'
  const paragraph = 'Somos una empresa de diseño de interiores y mobiliario, expertos en remodelaciones de espacios.'
    return (
      <>
        <Header image={width > 768? heroImage : heroImageSmall} title={title} paragraph={paragraph} />
        <Contact />
        <WaButton />
      </>
    )
}
  
export { HomeHogar }