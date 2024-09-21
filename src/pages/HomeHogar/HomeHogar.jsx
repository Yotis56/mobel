import { useEffect } from "react"
import emailjs from '@emailjs/browser'
import { Header } from "../../components/Header/Header"
import { Contact } from "../../components/Contact/Contact"
import heroImage from '../../assets/Kitchen1-1024.jpg'

const HomeHogar = () => {

  useEffect(() => {
    emailjs.init({
      publicKey: 'px67tiu5cXBv6yCRY'
    })  
  }, [])
  const title = '¿Tienes una remodelación pendiente?'
  const paragraph = 'Somos una empresa de diseño de interiores y mobiliario, expertos en remodelaciones de espacios.'
    return (
      <>
        <Header image={heroImage} title={title} paragraph={paragraph} />
        <Contact />
      </>
    )
}
  
export { HomeHogar }