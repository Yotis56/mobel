import exampleImage from '../../assets/images/OfficeHero.jpg'
import { Header } from "../../components/Header/Header"
import { Projects } from "../../components/Projects/Projects"
import { projectsListCorporativo } from './projectsListCorporativo'

const ProjectsCorporativo = () => {
    const title = 'título de ejemplo'
    const paragraph = 'lorem ipsum dolor sit amet'
    return (
        <>
            <Header image={exampleImage} title={title} paragraph={paragraph} />
            <Projects projectsList={projectsListCorporativo} title='Proyectos Corporativos'/>
        </>
    )
}
export {ProjectsCorporativo}