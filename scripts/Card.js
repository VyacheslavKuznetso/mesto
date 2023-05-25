export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];




export class Card {
  constructor(initialCards, elements) {
    this._textPhoto = initialCards.name;
    this._srcImage = initialCards.link;
    this._altImage = initialCards.name;
    this._elements = elements;
  }

  _createCard () {
    
    this._cardElement = this._elements.querySelector('#element').content.querySelector('.element').cloneNode(true);

    return this._cardElement;
    
  }

  _addAttributCard () {
    this._element = this._createCard();

    this._element.querySelector('.element__text-photo').textContent = this._textPhoto;
    this._element.querySelector('.element__image').src = this._srcImage;
    this._element.querySelector('.element__image').alt = this._altImage;


    return this._element;
  } 


  prependCard() {
    this.userElement = this._addAttributCard();
    this._elements.prepend(this.userElement);
  }
}


