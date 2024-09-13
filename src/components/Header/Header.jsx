import heroImage from '../../assets/Kitchen1-1024.jpg'
import styles from './styles.module.css'

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.hero}>
                <div className={styles.imgContainer}>
                    <img src={heroImage} alt="imagen cocina" />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.heroTitle}>¿Tienes una remodelación pendiente?</h1>
                    <p className={styles.heroText}>Somos una empresa de diseño de interiores y mobiliario, expertos en remodelaciones de espacios como Apartamentos, Oficinas y locales comerciales.</p>
                </div>
            </div>
        </div>
    )
}

export { Header }