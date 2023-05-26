
export class FormValidator {
    constructor (config, formElement) {
        this._formElement = formElement;
        this._config = config;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
        this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
    }


    _hasInvalidInput (inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid
        })
    }
    
    
    toggleButtonState(inputList, buttonElement) {
        if (this._hasInvalidInput(inputList)) {
          buttonElement.setAttribute('disabled', true);
          buttonElement.classList.remove(this._config.errorClass);
          buttonElement.classList.add(this._config.inactiveButtonClass);
        } else {
          buttonElement.classList.add(this._config.errorClass);
          buttonElement.removeAttribute('disabled');
          buttonElement.classList.remove(this._config.inactiveButtonClass);
        }
    }
      
    
    _showInputError (inputElement, errorMessage) {
        this._errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._config.inputErrorClass);
        this._errorElement.classList.add(this._config.spenMessageError)
        this._errorElement.textContent = errorMessage
    }
    
    _hideInputError (inputElement) {
        this._errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._config.inputErrorClass);
        this._errorElement.classList.remove(this._config.spenMessageError);
        this._errorElement.textContent = ''
    }
    
    _isValid(inputElement) {
        if (!inputElement.validity.valid) {
          this._showInputError(inputElement, inputElement.validationMessage);
        } else {
          this._hideInputError(inputElement);
        }
    }
      
    
    setEventListeners () {
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement)
                this.toggleButtonState(this._inputList, this._buttonElement)
            })
        })

        this.toggleButtonState(this._inputList, this._buttonElement)
    
    }
}









