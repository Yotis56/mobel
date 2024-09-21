const nameValidation = {
    required: {
        value: true, 
        message: 'Ingrese su nombre'
    }
}
const lastNameValidation = {
    required: {
        value: true, 
        message: 'Ingrese su apellido'
    }
}
const phoneValidation = {
    required: {
        value: true, 
        message: 'Ingrese su teléfono'
    },
    pattern: {
        value: /^\d{10}$/,
        message: 'Ingrese un número de teléfono valido'
    }
}
const descriptionValidation = {
    required: {
        value: true, 
        message: 'Ingrese Una breve descripción de su proyecto'
    }
}

export {nameValidation, lastNameValidation, phoneValidation, descriptionValidation}