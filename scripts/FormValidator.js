
export class FormValidator {
    constructor (config, formElement) {
        this._formElement = formElement;
        this._config = config;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
        this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
    }


    _hasInvalidInput () {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid
        })
    }
    
    
    toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._buttonElement.setAttribute('disabled', true);
            this._buttonElement.classList.remove(this._config.errorClass);
            this._buttonElement.classList.add(this._config.inactiveButtonClass);
        } else {
            this._buttonElement.classList.add(this._config.errorClass);
            this._buttonElement.removeAttribute('disabled');
            this._buttonElement.classList.remove(this._config.inactiveButtonClass);
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
                this.toggleButtonState()
            })
        })

        this.toggleButtonState()
    
    }
}









