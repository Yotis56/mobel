import styles from './styles.module.css'
import instagramIcon from '../../assets/images/instagram.png'
import tiktokIcon from '../../assets/images/tik-tok.png'
import mobbelIcon from '../../assets/images/logo.png'

const Footer = () => {
    return (
        <footer className={styles.footer}>    
            <div className={styles.logoContainer}>
                <img src={mobbelIcon} alt="" />
            </div>
            <div className={styles.linksContainer}>
                <div className={styles.linkContainer}>
                    <span className="material-symbols-outlined">mail</span>
                    <a href="mailto:info@mobel.com.co">info@mobel.com.co</a>
                </div>
                <div className={styles.linkContainer}>
                    <span className="material-symbols-outlined">call</span>
                    <a href="tel:3222273699">322 2273699</a>
                </div>
                <div className={styles.linkContainer}>
                    <span className="material-symbols-outlined">location_on</span>
                    <span>Bogotá, Colombia</span>
                </div>
            </div> 
            <div className={styles.mediaContainer}>
                <p>síguenos en nuestras redes sociales:</p>
                <div className="mediaLinks">
                    <a href="https://www.instagram.com/mobel_studio_sas/">
                        <img className={styles.socialIcon} src={instagramIcon} alt="instagram Icon" loading="lazy" />
                    </a>
                    <a href="https://www.tiktok.com/@mobel.studio4?lang=es">
                        <img className={styles.socialIcon} src={tiktokIcon} alt="TikTok Icon" loading="lazy" />
                    </a>
                </div>
            </div>
            <p className={styles.rights}>Mobel Studio S.A.S. 2024. Todos los derechos reservados</p>
        </footer>
    )
}

export { Footer }