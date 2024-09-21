import { useEffect } from "react"
import emailjs from '@emailjs/browser'
import { Header } from "../../components/Header/Header"
import { Contact } from "../../components/Contact/Contact"
import heroImage  from '../../assets/OfficeHero.jpg'

const HomeCorporativo = () => {

  useEffect(() => {
    emailjs.init({
      publicKey: 'px67tiu5cXBv6yCRY'
    })  
  }, [])
  const title = '¿Mobiliario Corporativo?'
  const paragraph = 'Diseñamos espacios de trabajo que inspiran productividad y creatividad.'

    return (
      <>
        <Header image={heroImage} title={title} paragraph={paragraph} />
        <Contact />
      </>
    )
}
  
export { HomeCorporativo }

//En el home corporativo el texto es muy corto. Habría que ponerlo con ancho al 100%
// También tengo que arreglar las imágenes. Ambas imágenes de Hero tienen que tener la misma medida