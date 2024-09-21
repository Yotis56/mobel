import { useFormContext } from "react-hook-form"
import { AnimatePresence, motion } from "framer-motion"
import { findInputError, isFormInvalid } from '../../utilities/formErrorsUtils'
import styles from './styles.module.css'

export const Input = ({ label, type, id, validation, multiline = false}) => {
    const { 
        register,
        formState: {errors}
    } = useFormContext() 

    const inputError = findInputError(errors, id)
    const isInvalid = isFormInvalid(inputError)

    // console.log(id, isInvalid, errors)
    return (
        <div className={styles.inputContainer}>
            <div className={styles.labelContainer}>
                <label htmlFor={id}>{label}</label>
                <AnimatePresence mode="wait" initial={false}>
                    { isInvalid && (
                        <InputError message={inputError.error.message} key={inputError.error.message}/>
                    )}
                </AnimatePresence>
            </div>
            { multiline ? 
                <textarea
                    id={id}
                    type={type}
                    className={styles.textArea}
                    {...register(id, validation)}
                />
                : 
                <input 
                    type={type} 
                    id={id} 
                    {...register(id, validation)}
                />
            }
        </div>
    )
}

const InputError = ({message}) => {
    return (
        <motion.p className={styles.errorMsg} {...framer_error}>
            <span className={`material-symbols-outlined ${styles.errorIcon}`}>error</span>
            {message}
        </motion.p>
    )
}
const framer_error = {
    intial: {opacity: 0, y: 10},
    animate: {opacity: 1, y: 0},
    exit: {opacity: 0, y: 10},
    transition: {duration: 0.2}
}
