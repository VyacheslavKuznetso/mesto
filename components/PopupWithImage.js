export default class PopupWithImage extends Popup {
    constructor(popup) {
      super(popup);
      this._popupPicture = this._selectorPopup.querySelector('.popup__picture');
      this._popupText = this._selectorPopup.querySelector('.popup__text');
    }
    
    open(clickedElement) {
      super.open();
      this._popupPicture.src = clickedElement.querySelector('.element__image').src;
      this._popupPicture.alt = clickedElement.querySelector('.element__text-photo').textContent;
      this._popupText.textContent = clickedElement.querySelector('.element__text-photo').textContent;
    }
}