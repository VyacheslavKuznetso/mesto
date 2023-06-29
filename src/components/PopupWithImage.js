import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
    constructor(popup) {
      super(popup);
      this._popupPicture = this._popup.querySelector('.popup__picture');
      this._popupText = this._popup.querySelector('.popup__text');
    }
    
    open(textPhoto, srcImage) {
      super.open();
      this._popupPicture.src = srcImage;
      this._popupPicture.alt = textPhoto;
      this._popupText.textContent = textPhoto;
    }

}