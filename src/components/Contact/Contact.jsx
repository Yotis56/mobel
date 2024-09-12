import { useState } from "react"
import emailjs from '@emailjs/browser'

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
            console.log(response)
            window.alert('Se ha enviado su información de contacto con éxito')
        } catch (error) {
            window.alert('No se ha podido enviar su información de contacto. Por favor intente más tarde')
        }
    }

    return (
        <div className="contactContainer">
            <div className="contact-left">
                <p>Acá iría una imagen bien perrona</p>
            </div>
            <div className="contact-right">
                <h3>Contáctanos</h3>
                <form>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="name" id="name" value={data.name} onChange={handleChange}/>
                    <label htmlFor="last_name">Apellid</label>
                    <input type="tel" name="last_name" id="last_name" value={data.last_name} onChange={handleChange} />
                    <label htmlFor="phone">Teléfono</label>
                    <input type="text" name="phone" id="phone" value={data.phone} onChange={handleChange} />
                    <label htmlFor="description">Describe tu proyecto</label>
                    <input type="text" name="description" id="description" value={data.description} onChange={handleChange} />
                </form>
                <button onClick={handleSubmit}>Enviar</button>
            </div>
        </div>
    )
}

export { Contact }