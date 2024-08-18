import { useState } from 'react'
import logo from '../../assets/logo.png'
import styles from './styles.module.css'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    console.log(styles)

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
                    <li>Proyectos</li>
                    <li>Catálogos</li>
                    <li>Contáctanos</li>
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