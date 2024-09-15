import styles from './styles.module.css'
import homeImage from '../../assets/Home.jpg'
import officeImage from '../../assets/Office.jpg'

const Segments = () => {
    const handleMoveRight = () => {
        const slideContainer = document.getElementById('segmentsContainer')
        const iconLeft = document.getElementById('iconLeft')
        const iconRight = document.getElementById('iconRight')
        slideContainer.style.transform = 'translateX(-60vw)'
        iconLeft.style.display = 'inline-block'
        iconRight.style.display = 'none'

    }
    const handleMoveLeft = () => {
        const slideContainer = document.getElementById('segmentsContainer')
        const iconLeft = document.getElementById('iconLeft')
        const iconRight = document.getElementById('iconRight')
        slideContainer.style.transform = 'translateX(8vw)'
        iconRight.style.display = 'inline-block'
        iconLeft.style.display = 'none'
    }
    return (
        <div className={styles.container}>
            <p>Podemos ayudarte a intervenir espacios de varios tipos:</p>
            <div className={styles.segmentsContainer} id='segmentsContainer'>
                <div className={styles.segment}>
                    <img src={homeImage} alt="" />
                    <div className={styles.background}>
                        <h4>Espacios Hogar</h4>
                        <ul className={styles.optionsList}>
                            <li>Diseño, fabricación e instalación de muebles a medida</li>
                            <li>
                                <ul>
                                    <li>Cocinas</li>
                                    <li>Closets Empotrados</li>
                                    <li>Muebles funcionales</li>
                                    <li>Baños</li>
                                    <li>Puertas</li>
                                </ul>
                            </li>
                            <li>Obra Blanca</li>
                            <li><ul>
                                <li>Pisos</li>
                                <li>Techos</li>
                                <li>Iluminación</li>
                            </ul></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.segment}>
                    <img src={officeImage} alt="" />
                    <div className={styles.background}>
                        <h4>Espacios Empresariales</h4>
                        <ul className={styles.optionsList}>
                            <li>Oficinas</li>
                            <li>
                                <ul>
                                    <li>Puestos e islas de trabajo</li>
                                    <li>Mesas de juntas</li>
                                    <li>Almacenamiento</li>
                                    <li>Almacenamiento</li>
                                    <li>Diseños especiales</li>
                                </ul>
                            </li>
                            <li>Locales Comerciales</li>
                            <li><ul>
                                <li>Diseño de interiores</li>
                                <li>Diseño de identidad corporativa</li>
                            </ul></li>
                            <li>Obra Civil</li>
                            <li><ul>
                                <li>Diseño de iluminación</li>
                                <li>Redes Sanitarias, Hidráulicas y Contra Incendio</li>
                                <li>Acabados</li>
                                <li>Mampostería en Drywall</li>
                            </ul></li>
                        </ul>
                    </div>
                </div>
            </div>
            <span className={`material-symbols-outlined ${styles.iconLeft}`} id='iconLeft' onClick={handleMoveLeft} >arrow_back_ios</span>
            <span className={`material-symbols-outlined ${styles.iconRight}`} id='iconRight' onClick={handleMoveRight}>arrow_forward_ios</span>
        </div>
    )
}

export { Segments }