import styles from './styles.module.css'

const Hero = ({ image, title, paragraph }) => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.hero}>
                <div className={styles.imgContainer}>
                    <img src={image} alt="imagen cocina" rel='preload'/>
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.heroTitle}>{title}</h1>
                    <p className={styles.heroText}>{paragraph}</p>
                </div>
            </div>
        </div>
    )
}

export { Hero }