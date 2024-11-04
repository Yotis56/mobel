import { useState } from 'react'
import logo from '../../assets/images/logo.png'
import styles from './styles.module.css'
import { Link, useLocation } from 'react-router-dom'
import { LuMenu, LuX } from "react-icons/lu"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleOpenMenu = () => {
        setIsMenuOpen(true)
    }
    const handleCloseMenu = () => {
        setIsMenuOpen(false)
    }
    const location = useLocation()

    return (
       <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <Link to='/'>
                    <img src={logo} alt="mobel" />
                </Link>
            </div>
            <div className={ isMenuOpen ? `${styles.navbarContainer} ${styles.active}` : styles.navbarContainer }>
                <ul>
                    <li onClick={handleCloseMenu}> 
                        <Link to={location.pathname.includes('/hogar') ? '/hogar' : '/corporativo'}>Home</Link>
                    </li>
                    <li onClick={handleCloseMenu}>
                        <Link to={ location.pathname.includes('/hogar') ? '/hogar/proyectos' : '/corporativo/proyectos'}>Proyectos</Link>
                    </li>
                    {/* <li onClick={handleCloseMenu}>
                        <Link to='/in-construction'>Catálogos</Link>
                    </li> */}
                    <li onClick={handleCloseMenu}>
                        <Link to={location.pathname.includes('/hogar') ? '/hogar#contact' : '/corporativo#contact'}>Contáctanos</Link>
                    </li>
                </ul>
                <div onClick={handleCloseMenu}>
                    <LuX className={styles.closeIcon}/>
                </div>
            </div>
            <div className={styles.iconContainer} onClick={handleOpenMenu}>
                <LuMenu className={`${isMenuOpen ? styles.displayNone : styles.menuIcon}`} />
            </div>
       </nav>
    )
}

export { Navbar }