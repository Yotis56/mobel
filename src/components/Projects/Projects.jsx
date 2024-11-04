import {ProjectCard} from '../ProjectCard/ProjectCard'
import styles from './styles.module.css'

const Projects = ({ projectsList, title }) => {
    return (
        <div className={styles.projectsContainer}>
            <h2>{title}</h2>
            <p>Cada proyecto es una oportunidad para hacer realidad las ideas de nuestros clientes. Diseñamos y creamos espacios que combinan funcionalidad y estilo, con atención en cada detalle.</p>
            <p>Explora nuestros proyectos recientes y descubre cómo podemos transformar tu espacio:</p>
            <div className={styles.cardsContainer}>
                {
                    projectsList.map( project => (
                        <ProjectCard key={project.id} images={project.photos} title={project.title}/>
                    ))
                }               
            </div>
        </div>
    )
}
export { Projects }