import  ReactDOM  from "react-dom";
import styles from './styles.module.css'

const Modal = ({children, setViewModal}) => {
    const handleClick = (e) => {
        console.log(e)
        if (e.target.id === 'background'){
            setViewModal(false)
        }
    }

    return ReactDOM.createPortal(
        <div className={styles.modalBackground} id='background' onClick={handleClick}>
            {children} 
        </div>
        , document.getElementById('modal-root')
    )
}

export { Modal }