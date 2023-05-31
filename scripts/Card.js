export class Card {
  constructor(cardData, elements, templateSelector, openPopup, popupWindowImg) {
    this._textPhoto = cardData.name;
    this._srcImage = cardData.link;
    this._altImage = cardData.name;
    this._elements = elements;
    this._templateSelector = templateSelector;
    this._openPopup = openPopup;
    this._popupWindowImg = popupWindowImg;
    this._popupText = popupWindowImg.querySelector('.popup__text');
    this._popupPicture = popupWindowImg.querySelector('.popup__picture');

  }

  _createCard () {
    
    this._cardElement = this._elements.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);

    return this._cardElement;
    
  }

  fillCard () {
    this._element = this._createCard();
    this._imageElement = this._element.querySelector('.element__image');
    this._imageElement.src = this._srcImage;
    this._imageElement.alt = this._altImage;
    this._element.querySelector('.element__text-photo').textContent = this._textPhoto;
  
    this._addEventListeners(this._element);
  
    return this._element;
  } 
  

  _addEventListeners() {
    this._element.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('element__like')) {
        this._toggleLike();
      }
  
      if (evt.target.classList.contains('element__delete-button')) {
        this._deleteCard();
      }
  
      if (evt.target.classList.contains('element__image')) {
        this._clickedElement = evt.target.closest(".element");
        this._openBigPicture(this._clickedElement);
      }
      return this._element;
    });
  }
  
  _toggleLike() {
    this._element.querySelector('.element__like').classList.toggle("element__like_filled");
  }
  
  _deleteCard() {
    this._element.remove();
  }
  

  _openBigPicture (clickedElement) {
    this._openPopup(this._popupWindowImg);
    this._popupText.textContent = clickedElement.querySelector('.element__text-photo').textContent;
    this._popupPicture.src = clickedElement.querySelector('.element__image').src;
    this._popupPicture.alt = clickedElement.querySelector('.element__text-photo').textContent;     
  }
}


