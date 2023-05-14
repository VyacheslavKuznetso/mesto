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
        setEventListeners(formElement,optic)

    })

}


const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid
    })
}


const toggleButtonState = (inputList, buttonElement, optic) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.setAttribute('disabled', true)
        buttonElement.classList.remove(optic.errorClass)
        buttonElement.classList.add(optic.inactiveButtonClass)
    } else {
        buttonElement.classList.add(optic.errorClass)
        buttonElement.removeAttribute('disabled')
        buttonElement.classList.remove(optic.inactiveButtonClass)
    }
}

const showInputError = (formElement, inputElement, errorMessage, optic) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(optic.inputErrorClass);
    errorElement.classList.add(optic.spenMessageError)
    errorElement.textContent = errorMessage
}

const hideInputError = (formElement, inputElement, optic) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(optic.inputErrorClass);
    errorElement.classList.remove(optic.spenMessageError);
    errorElement.textContent = ''
}

const isValid = (formElement, inputElement, optic) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, optic)
    } else {
        hideInputError(formElement, inputElement, optic)
    }
}

const setEventListeners = (formElement, optic) => {
    const inputList = Array.from(formElement.querySelectorAll(optic.inputSelector));
    const buttonElement = formElement.querySelector(optic.submitButtonSelector);

    toggleButtonState(inputList, buttonElement, optic)

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement, optic)
            toggleButtonState(inputList, buttonElement, optic)
        })
    })

}


enableValidation(validationConfigs);