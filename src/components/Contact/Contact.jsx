import { FormProvider, useForm } from "react-hook-form"
import ReCAPTCHA from 'react-google-recaptcha'
import emailjs from '@emailjs/browser'
import { Input } from "../Input/input"
import { nameValidation, lastNameValidation, phoneValidation, descriptionValidation } from './validationObjects'
import contactImg from '../../assets/contactUs-800.jpg'
import styles from './styles.module.css'
import { useRef, useState } from "react"


const Contact = () => {
    
    const methods = useForm()
    const captchaRef = useRef(null)

    const [captchaToken, setcaptchaToken] = useState(null)
    const onSubmit = methods.handleSubmit( async (data)=> {
        try {
            const response = await emailjs.send('mobel_contact_service', 'contact_form', 
                {...data, 'g-recaptcha-response': captchaToken}, 
            )
            window.alert('Se ha enviado su información de contacto con éxito')
        } catch (error) {
            console.error(error)
            window.alert('No se ha podido enviar su información de contacto. Por favor intente más tarde')
        }
        
    }) 

    return (
        <div className={styles.contactContainer}>
            <div className={styles.contactLeft}>
                <img src={contactImg} alt="Mujer hablando al teléfono" />
            </div>
            <div className={styles.contactRight}>
                <h3>Contáctanos</h3>
                <FormProvider {...methods}>
                    <form onSubmit={ e => e.preventDefault()} noValidate> 
                        <Input label='Nombre' type='text' id='name' validation={nameValidation}/>
                        <Input label='Apellido' type='text' id='last_name' validation={lastNameValidation}/>
                        <Input label='Teléfono' type='tel' id='phone' validation={phoneValidation}/>
                        <Input label='Describe tu proyecto' type='text' id='description' validation={descriptionValidation} multiline={true}/>
                        <ReCAPTCHA 
                            sitekey="6Lc2NEsqAAAAAPpeoIivs_ClOUFYD3N6G9XCZJVt" 
                            ref={captchaRef}
                            onChange={(val) => setcaptchaToken(val)}
                            className={styles.captchaContainer}
                        />
                        <div className={styles.buttonContainer}>
                            <button type="submit" className={styles.submitButton} onClick={onSubmit} disabled={!captchaToken}>Enviar</button>
                        </div>
                    </form>
                </FormProvider>
            </div>  
        </div>
    )
}

export { Contact }