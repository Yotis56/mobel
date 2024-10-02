import {ProjectCard} from '../ProjectCard/ProjectCard'
import { proyectosHogar } from './proyectosHogar'
import styles from './styles.module.css'

const Projects = () => {
    return (
        <div className={styles.projectsContainer}>
            <h3>Proyectos Hogar</h3>
            <div className={styles.cardsContainer}>
                <ProjectCard images={proyectosHogar[0].photos} title={proyectosHogar[0].title}/>
                <ProjectCard images={proyectosHogar[0].photos} title={proyectosHogar[0].title}/>
                <ProjectCard images={proyectosHogar[0].photos} title={proyectosHogar[0].title}/>
                <ProjectCard images={proyectosHogar[0].photos} title={proyectosHogar[0].title}/>
               
            </div>
        </div>
    )
}
export { Projects }