import {ProjectCard} from '../ProjectCard/ProjectCard'
import styles from './styles.module.css'

const Projects = ({ projectsList, title }) => {
    return (
        <div className={styles.projectsContainer}>
            <h3>{title}</h3>
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