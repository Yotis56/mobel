import exampleImage from '../../assets/images/Office2.jpg'
import { Hero } from "../../components/Hero/Hero"
import { Projects } from "../../components/Projects/Projects"
import { projectsListCorporativo } from './projectsListCorporativo'

const ProjectsCorporativo = () => {
    const title = 'Ambientes que Marcan la Diferencia'
    const paragraph = 'Transformamos tus ideas en espacios funcionales y sofisticados, adaptados a las necesidades de tu negocio'
    return (
        <>
            <Hero image={exampleImage} title={title} paragraph={paragraph} />
            <Projects projectsList={projectsListCorporativo} title='Proyectos Corporativos'/>
        </>
    )
}

export {ProjectsCorporativo}