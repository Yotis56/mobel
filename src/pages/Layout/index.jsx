import { Outlet } from "react-router-dom"
import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer/Footer"

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export { Layout }