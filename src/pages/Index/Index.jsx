import { Link } from 'react-router-dom'
import Home from '../../assets/images/Home.jpg'
import Office from '../../assets/images/Office.jpg'
import Logo from '../../assets/images/logoSimp.png'
import styles from './styles.module.css'

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