import { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { ImageSlider } from '../ImageSlider/ImageSlider'
import { Modal } from '../Modal/Modal'
import styles from './styles.module.css'

const ProjectCard = ({title, images}) => {

    const width = useContext(AppContext)
    const [viewModal, setViewModal] = useState(false)
    const handleOpenModal = () => {
        setViewModal(true)
    }

    const mobile = (
        <div className={styles.card}>
            <ImageSlider images={images}/>
            <p>{title}</p>
            <hr />
        </div>)
    
    const desktop = <>
        <div className={styles.card}>
            <img src={images[0]} alt="" onClick={handleOpenModal} />
            <p>{title}</p>
        </div>
        {
            viewModal &&
            <Modal setViewModal={setViewModal}>
                <ImageSlider images={images} setViewModal={setViewModal} />  
            </Modal>
        }
    </>

    return width > 650 ?  desktop : mobile
}

export { ProjectCard }