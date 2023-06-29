import Popup from "./Popup.js";
export default class PopupDeleteCard extends Popup {
    constructor(popup, submitCallback) {
        super(popup)
        this._deleteForm = this._popup.querySelector('.popup__form');
        this._submitCallback = submitCallback;
    }

    setEventListeners() {
        super.setEventListeners()
        this._deleteForm.addEventListener('submit', () => {


            this._submitCallback(this._element)
            
            this.close()
        })
    }

    close() {
        super.close()
    }
    open(element) {
        super.open()
        this._element = element
    }
}