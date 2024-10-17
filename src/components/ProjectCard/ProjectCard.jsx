import { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { ImageSlider } from '../ImageSlider/ImageSlider'
import styles from './styles.module.css'
import { Modal } from '../Modal/Modal'

const ProjectCard = ({title, images}) => {

    const width = useContext(AppContext)
    const [viewModal, setViewModal] = useState(false)
    const handleOpenModal = () => {
        setViewModal(true)
    }

    const mobile = (
        <div className={styles.card}>
            <p>{title}</p>
            <ImageSlider images={images}/>
        </div>)
    
    const desktop = <>
        <div className={styles.card}>
            <p>{title}</p>
            <img src={images[0]} alt="" onClick={handleOpenModal} />
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