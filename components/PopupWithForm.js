export default class PopupWithForm extends Popup {
    constructor (popup, submitCallback) {
        super(popup);
        this._popupForm = this._selectorPopup.querySelector('.popup__form')
        this._submitCallback = submitCallback; // это функция
    }

    _getInputValues = () => {
        this.inputList = Array.from(this._popupForm.querySelectorAll('.popup__form-input'));
        this._values = {};
        this.inputList.forEach((input) => {
            this._values[input.name] = input.value
        })
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', () => {
          this._getInputValues();
          this._submitCallback(this._values);
        });
    }
      

    close(evt) {
        super.close()
        evt.target.reset();
    }
}