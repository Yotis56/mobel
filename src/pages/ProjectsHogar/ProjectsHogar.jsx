import exampleImage from '../../assets/images/Kitchen1-1024.jpg'
import { Header } from "../../components/Header/Header"
import { Projects } from "../../components/Projects/Projects"

const ProjectsHogar = () => {
    const title = 'título de ejemplo'
    const paragraph = 'lorem ipsum dolor sit amet'
    return (
        <>
            <Header image={exampleImage} title={title} paragraph={paragraph} />
            <Projects />
        </>
    )
}
export {ProjectsHogar}

{/* <button onClick={() => setViewModal(true)}>Abrir Modal</button>
{
    viewModal && 
    <Modal setViewModal={setViewModal}>
        <p>Este texto debería estar dentro del modal.</p>
    </Modal>
} */}

//Debería crear un componente Proyectos. 
// Este componente contiene un título, y genera una serie de tarjetas de proyecto.
// Los proyectos deberían estar en un array. Cada elemento sería un objeto con un nombre, y un array de fotos.
// A cada tarjeta le paso las imágenes como un array, y la tarjeta abre el modal. 