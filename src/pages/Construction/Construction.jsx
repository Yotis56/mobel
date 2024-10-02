import constructionImg from '../../assets/images/underConstruction.svg'
import logoNegro from '../../assets/images/logonegro.png'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

const Construction = () => {
    return (
        <div className={styles.construction}>
            <div className={styles.constructionText}>
                <Link to='/'>
                    <img src={logoNegro} alt="logo Mobel" />
                </Link>
                <p>Esta página se encuentra actualmente en construcción.</p>
            </div>
            <img src={constructionImg} alt="" />
        </div>
    )
}
export { Construction }