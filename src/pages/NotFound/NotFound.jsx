
import { Link } from 'react-router-dom'
import notFoundImg from '../../assets/images/NotFound.svg'
import styles from './styles.module.css'

const NotFound = () => {
    return (
        <div className={styles.notFound} >
            <img src={notFoundImg} alt="" />
            <p>Lo sentimos, no encontramos la página solicitada</p>
            <Link to='/'>
                <button>Volver al Inicio</button>
            </Link>
        </div>
    )
}

export { NotFound }