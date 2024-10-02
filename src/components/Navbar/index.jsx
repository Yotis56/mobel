import { useState } from 'react'
import logo from '../../assets/images/logo.png'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleOpenMenu = () => {
        setIsMenuOpen(true)
    }
    const handleCloseMenu = () => {
        setIsMenuOpen(false)
    }

    return (
       <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="mobel" />
            </div>
            <div className={ isMenuOpen ? `${styles.navbarContainer} ${styles.active}` : styles.navbarContainer }>
                <ul>
                    <li>Home</li>
                    <li><Link to='/in-construction'>Proyectos</Link></li>
                    <li><Link to='/in-construction'>Catálogos</Link></li>
                    <li><a href="#contact">Contáctanos</a></li>
                </ul>
                <span className={`material-symbols-outlined ${styles.closeIcon}`} onClick={handleCloseMenu}>close</span>
            </div>
            <div className={styles.iconContainer}>
                <span className={`material-symbols-outlined ${isMenuOpen ? styles.displayNone : styles.menuIcon}`} onClick={handleOpenMenu}>menu</span>
            </div>
       </nav>
    )
}

export { Navbar }