import waImage from '../../assets/images/WhatsAppIcon.svg'
import styles from './styles.module.css'

const WaButton = () => {
    return (
        <div className={styles.waContainer}>
            <a href='https://wa.me/+573222273699'>
                <img src={waImage} alt="whatsapp icon to chat" />
            </a>
        </div>
    )
}

export { WaButton }