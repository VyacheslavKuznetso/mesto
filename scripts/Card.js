const popupWindowImg = document.querySelector('.window-img');
const popupPicture = document.querySelector('.popup__picture');
const popupText = document.querySelector('.popup__text');

export function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);

}


export function closePopup (popup) {
  popup.classList.remove('popup_opened'); 
  document.removeEventListener('keydown', closeByEscape);

}

export function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

export class Card {
  constructor(cardData, elements, templateSelector) {
    this._textPhoto = cardData.name;
    this._srcImage = cardData.link;
    this._altImage = cardData.name;
    this._elements = elements;
    this._boxElelment = templateSelector;
  }

  _createCard () {
    
    this._cardElement = this._elements.querySelector(this._boxElelment).content.querySelector('.element').cloneNode(true);

    return this._cardElement;
    
  }

  fillCard () {
    this._element = this._createCard();

    this._element.querySelector('.element__text-photo').textContent = this._textPhoto;
    this._element.querySelector('.element__image').src = this._srcImage;
    this._imageElement = this._element;
    this._imageElement.querySelector('.element__image').alt = this._altImage;

    this._addEventListeners(this._imageElement);


    return this._imageElement;
  } 


  _addEventListeners () {
    this._element.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('element__like')) {
        evt.target.classList.toggle("element__like_filled");
      }
    
      if (evt.target.classList.contains('element__delete-button')) {
        evt.target.closest(".element").remove();
      }
    
      if (evt.target.classList.contains('element__image')) {
        this._clickedElement = evt.target.closest(".element");
        this._openBigPicture(this._clickedElement);
      }
    });
    return this._element;
  }

  _openBigPicture (clickedElement) {
    openPopup(popupWindowImg);
    popupText.textContent = clickedElement.querySelector('.element__text-photo').textContent;
    popupPicture.src = clickedElement.querySelector('.element__image').src;
    popupPicture.alt = clickedElement.querySelector('.element__text-photo').textContent;     
  }
}


