export default class Card {
  constructor(cardElement, elements, templateSelector, classPopupWindowImg) {
    this._textPhoto = cardElement.name;
    this._srcImage = cardElement.link;
    this._altImage = cardElement.name;
    this._elements = elements;
    this._templateSelector = templateSelector;
    this._classPopupWindowImg = classPopupWindowImg;
  }

  _createCard = () => {
    
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
  

  _addEventListeners = () => {
    this._element.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('element__like')) {
        this._toggleLike();
      }
  
      if (evt.target.classList.contains('element__delete-button')) {
        this._deleteCard();
      }
  
      if (evt.target.classList.contains('element__image')) {
        this._clickedElement = evt.target.closest(".element");
        this._openBigPicture();
      }
      return this._element;
    });
  }
  
  _toggleLike = () => {
    this._element.querySelector('.element__like').classList.toggle("element__like_filled");
  }
  
  _deleteCard = () => {
    this._element.remove();
  }
  

  _openBigPicture = () => {
    this._classPopupWindowImg.open(this._clickedElement);
    
  }
}

