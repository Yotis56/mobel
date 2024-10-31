import { useEffect, useState } from 'react'
import { Outlet } from "react-router-dom"
import emailjs from '@emailjs/browser'
import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer/Footer"
import { AppContext } from "../../context/AppContext"
import { WaButton } from '../../components/WaButton/WaButton'

const Layout = () => {
    
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange) 
        emailjs.init({
          publicKey: 'px67tiu5cXBv6yCRY'
        })
        return () => {
          window.removeEventListener('resize', handleWindowSizeChange)
        }
      }, [])

    const handleWindowSizeChange = () => {
      setScreenWidth(window.innerWidth)
    }


    return (
        <AppContext.Provider value={screenWidth}>
            <Navbar />
            <Outlet />
            <Footer />
            <WaButton />
        </AppContext.Provider>
    )
}

export { Layout }