import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <>
            <p>Este es el layout de la página</p>
            <Outlet />
        </>
    )
}

export { Layout }