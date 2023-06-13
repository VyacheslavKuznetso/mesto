export default class Popup {
    constructor(popup) {
      this._selectorPopup = popup;
      this._handleEscClose = this._handleEscClose.bind(this)
    }
  
    open() {
      this._selectorPopup.classList.add('popup_opened');
      document.addEventListener('keydown', this._handleEscClose);
      this._selectorPopup.addEventListener('mousedown', this._handleEscClose)
    }
    
    close() {
      this._selectorPopup.classList.remove('popup_opened');
      document.removeEventListener('keydown', this._handleEscClose);
      this._selectorPopup.removeEventListener('mousedown', this._handleEscClose)
    }
  
    _handleEscClose(evt) {
      if (evt.key === 'Escape') {
        this.close()
      }
  
      if (evt.target.classList.contains('popup_opened')) {
        this.close() 
      }
    }
  
    setEventListeners() {
      this._closeButton =  this._selectorPopup.querySelector('.popup__close');
      this._closeButton.addEventListener('click', () => this.close());
    }
} 