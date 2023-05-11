const enableValidation = (optic) => {

    const hasInvalidInput = (inputList) => {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid
        })
    }

    const toggleButtonState = (inputList, buttonElement) => {
        if (hasInvalidInput(inputList)) {
            buttonElement.setAttribute('disabled', true)
            buttonElement.classList.remove(optic.inactiveButtonClass)
            buttonElement.classList.add(optic.errorClass)
        } else {
            buttonElement.classList.add(optic.inactiveButtonClass)
            buttonElement.removeAttribute('disabled')
            buttonElement.classList.remove(optic.errorClass)
        }
    }

    const showInputError = (formElement, inputElement, errorMessage) => {
        const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(optic.inputErrorClass);
        errorElement.classList.add(optic.spenMessageError)
        errorElement.textContent = errorMessage
    }

    const hideInputError = (formElement, inputElement) => {
        const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(optic.inputErrorClass);
        errorElement.classList.remove(optic.spenMessageError)
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
        const inputList = Array.from(formElement.querySelectorAll(optic.inputSelector));
        const buttonElement = formElement.querySelector(optic.submitButtonSelector);
        
        toggleButtonState(inputList, buttonElement)

        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                isValid(formElement, inputElement)
                toggleButtonState(inputList, buttonElement)
            })
        })
        
    }

    const formList = Array.from(document.querySelectorAll(optic.formSelector));
    formList.forEach((formElement) => {
        setEventListeners(formElement)
    })

}


