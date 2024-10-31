import exampleImage from '../../assets/images/Kitchen2.jpg'
import { Hero } from "../../components/Hero/Hero"
import { Projects } from "../../components/Projects/Projects"
import { projectsListHogar } from './projectsListHogar'

const ProjectsHogar = () => {
    const title = 'Diseño que Inspira y Acompaña'
    const paragraph = 'Descubre cómo convertimos ideas en hogares llenos de estilo, calidez y personalidad'
    return (
        <>
            <Hero image={exampleImage} title={title} paragraph={paragraph} />
            <Projects projectsList={projectsListHogar} title='Proyectos Hogar'/>
        </>
    )
}
export {ProjectsHogar}