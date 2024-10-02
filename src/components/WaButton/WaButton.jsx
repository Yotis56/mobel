import waImage from '../../assets/images/whatsapp-color.png'
import styles from './styles.module.css'

const WaButton = () => {
    return (
        <div className={styles.waContainer}>
            <a href='https://wa.me/+573115896243'>
                <img src={waImage} alt="whatsapp icon to chat" />
            </a>
        </div>
    )
}

export { WaButton }