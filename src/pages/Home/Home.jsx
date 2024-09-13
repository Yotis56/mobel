import { useEffect } from "react"
import emailjs from '@emailjs/browser'
import { Header } from "../../components/Header/Header"
import { Contact } from "../../components/Contact/Contact"

const Home = () => {

  useEffect(() => {
    emailjs.init({
      publicKey: 'px67tiu5cXBv6yCRY'
    })  
  }, [])

    return (
      <>
        <Header />
        <Contact />
      </>
    )
}
  
export { Home }