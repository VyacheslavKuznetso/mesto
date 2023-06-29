import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor (popup, submitCallback) {
        super(popup);
        this._popupForm = this._popup.querySelector('.popup__form')
        this.inputList = this._popupForm.querySelectorAll('.popup__form-input')
        this._submitButton = this._popup.querySelector('.popup__form-submit-button')
        this._submitCallback = submitCallback; // это функция
    }

    _getInputValues = () => {
        this._values = {}
        this.inputList.forEach((input) => {
            this._values[input.name] = input.value;
        });
        
        
        return this._values
    }

    setEventListeners() {
        super.setEventListeners();

        this._popupForm.addEventListener('submit', (evt) => {

            evt.preventDefault();

            if(this._submitButton.textContent === 'Сохранить') {

                this._submitButton.textContent = 'Сохранение...';
            } else {
                this._submitButton.textContent = 'Создание...';
            }
            
            this.forInput = this._getInputValues();
            this._submitCallback(this.forInput); 
        
            this.close()
            
        });

    }
      

    close() {
        super.close()
        this._popupForm.reset();
    }
}