import styles from './styles.module.css'
import Home from '../../assets/Home.jpg'
import Office from '../../assets/Office.jpg'
import Logo from '../../assets/logoSimp.png'
import { Link } from 'react-router-dom'

const Index = () => {
    return (
        <div className={styles.container}>
            <Link to='/hogar' className={styles.link}>
                <div className={styles.imageContainer}>
                    <img src={Home} alt="" className={styles.backgroundImage} />
                    <div className={styles.textContainer}>
                        
                            <img src={Logo} alt="" className={styles.iconLeft} />
                            <p>Hogar</p>
                    </div>
                </div>
            </Link>
            <Link to='/corporativo' className={styles.link}>
                <div className={styles.imageContainer}>
                    <img src={Office} alt="" className={styles.backgroundImage} />
                    <div className={styles.textContainer}>
                            <img src={Logo} alt="" className={styles.iconRight} />
                            <p>Corporativo</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export { Index }