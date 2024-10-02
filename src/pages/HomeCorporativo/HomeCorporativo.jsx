import { Header } from "../../components/Header/Header"
import { Contact } from "../../components/Contact/Contact"
import heroImage  from '../../assets/images/OfficeHero.jpg'
import heroImageSmall  from '../../assets/images/OfficeHero-600.jpg'
import { useContext } from "react"
import { AppContext } from "../../context/AppContext"


const HomeCorporativo = () => {

  const width = useContext(AppContext)

  const title = '¿Mobiliario Corporativo?'
  const paragraph = 'Diseñamos espacios de trabajo que inspiran productividad y creatividad.'

    return (
      <>
        <Header image={width > 768? heroImage : heroImageSmall} title={title} paragraph={paragraph} />
        <Contact />
      </>
    )
}
  
export { HomeCorporativo }