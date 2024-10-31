import { Contact } from "../../components/Contact/Contact"
import heroImage  from '../../assets/images/OfficeHero.jpg'
import heroImageSmall  from '../../assets/images/OfficeHero-600.jpg'
import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import { Hero } from "../../components/Hero/Hero"


const HomeCorporativo = () => {

  const width = useContext(AppContext)

  const title = 'Mobiliario Corporativo'
  const paragraph = 'Diseñamos espacios de trabajo que inspiran productividad y creatividad.'

    return (
      <>
        <Hero image={width > 768? heroImage : heroImageSmall} title={title} paragraph={paragraph} />
        <Contact />
      </>
    )
}
  
export { HomeCorporativo }