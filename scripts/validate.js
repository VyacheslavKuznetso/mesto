const validationConfigs = {
    formSelector: '.popup__form',
    inputSelector: '.popup__form-input',
    submitButtonSelector: '.popup__form-submit-button',
    inactiveButtonClass: 'popup__form-submit-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    spenMessageError: 'popup__message_input-error',
    errorClass: 'popup__form-submit-button_visible'
}

const enableValidation = (optic) => {

    const formList = Array.from(document.querySelectorAll(optic.formSelector));
    formList.forEach((formElement) => {
        setEventListeners(formElement)
    })

}


const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid
    })
}


const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.setAttribute('disabled', true)
        buttonElement.classList.remove(validationConfigs.errorClass)
        buttonElement.classList.add(validationConfigs.inactiveButtonClass)
    } else {
        buttonElement.classList.add(validationConfigs.errorClass)
        buttonElement.removeAttribute('disabled')
        buttonElement.classList.remove(validationConfigs.inactiveButtonClass)
    }
}

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(validationConfigs.inputErrorClass);
    errorElement.classList.add(validationConfigs.spenMessageError)
    errorElement.textContent = errorMessage
}

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(validationConfigs.inputErrorClass);
    errorElement.classList.remove(validationConfigs.spenMessageError)
    errorElement.textContent = ''
}

const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage)
    } else {
        hideInputError(formElement, inputElement)
    }
}

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(validationConfigs.inputSelector));
    const buttonElement = formElement.querySelector(validationConfigs.submitButtonSelector);

    toggleButtonState(inputList, buttonElement)

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement)
            toggleButtonState(inputList, buttonElement)
        })
    })

}


enableValidation(validationConfigs);