import { useState } from "react"
import emailjs from '@emailjs/browser'
import contactImg from '../../assets/contactUs-800.jpg'
import styles from './styles.module.css'

const Contact = () => {
    const [data, setData] = useState({
        name: '',
        last_name: '',
        phone: '',
        description: ''
    })
    const handleChange = (event) => {
        const target = event.target.name
        const value = event.target.value
        setData({
            ...data, 
            [target]: value
        })
    }
    const handleSubmit = async () => {
        try {
            const response = await emailjs.send('mobel_contact_service', 'contact_form', data, )
            window.alert('Se ha enviado su información de contacto con éxito')
        } catch (error) {
            console.error(error)
            window.alert('No se ha podido enviar su información de contacto. Por favor intente más tarde')
        }
    }

    return (
        <div className={styles.contactContainer}>
            <div className={styles.contactLeft}>
                <img src={contactImg} alt="Mujer hablando al teléfono" />
            </div>
            <div className={styles.contactRight}>
                <h3>Contáctanos</h3>
                <form>
                    <div className={styles.inputContainer}>
                        <label htmlFor="name">Nombre</label>
                        <input type="text" name="name" id="name" value={data.name} onChange={handleChange}/>
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="last_name">Apellido</label>
                        <input type="tel" name="last_name" id="last_name" value={data.last_name} onChange={handleChange} />
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="phone">Teléfono</label>
                        <input type="text" name="phone" id="phone" value={data.phone} onChange={handleChange} />
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="description">Describe tu proyecto</label>
                        <textarea type="text" name="description" id="description" value={data.description} onChange={handleChange} />
                    </div>
                </form>
                <div className={styles.buttonContainer}>
                    <button onClick={handleSubmit} className={styles.submitButton}>Enviar</button>
                </div>
            </div>
        </div>
    )
}

export { Contact }

// Recordar que estoy diseñando mobile-first. Cómo se debería ver la sección de contacto en móvil. ¿Sin la imagen?