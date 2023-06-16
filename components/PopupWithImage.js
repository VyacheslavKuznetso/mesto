import Popup from '../components/Popup.js'

export default class PopupWithImage extends Popup {
    constructor(popupWindowImg) {
      super(popupWindowImg);
      this._popupPicture = popupWindowImg.querySelector('.popup__picture');
      this._popupText = popupWindowImg.querySelector('.popup__text');
    }
    
    open(clickedElement) {
      super.open();
      this._popupPicture.src = clickedElement.querySelector('.element__image').src;
      this._popupPicture.alt = clickedElement.querySelector('.element__text-photo').textContent;
      this._popupText.textContent = clickedElement.querySelector('.element__text-photo').textContent;
    }
}