export default class Card {
  constructor(cardElement, elements, templateSelector, classPopupWindowImg, popupDeleteCard, api, userId) {
    this._textPhoto = cardElement.name;
    this._srcImage = cardElement.link;
    this._altImage = cardElement.name;
    this._likes = cardElement.likes
    this._ownerId = cardElement.owner._id;
    this._idImage = cardElement._id;
    this._elements = elements;
    this._templateSelector = templateSelector;
    this._classPopupWindowImg = classPopupWindowImg;
    this._popupDeleteCard = popupDeleteCard
    this._api = api
    this._userId = userId.userId
  }

  _createCard = () => {
    
    this._cardElement = this._elements.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);

    return this._cardElement;
    
  }

  generateCard () {
    this._element = this._createCard();

    this._deleteButton = this._element.querySelector('.element__delete-button');
    this._likeButton = this._element.querySelector('.element__like');
    this._numberLikes = this._element.querySelector('.element__number');
    this._imageElement = this._element.querySelector('.element__image');

    if(this._ownerId !== this._userId) {

      this._deleteButton.remove();
    }

    if (this._likes.some(like => like._id === this._userId)) {
      this._likeButton.classList.add("element__like_filled");
    }

    this._imageElement.src = this._srcImage;
    this._imageElement.alt = this._altImage;
    this._element.querySelector('.element__text-photo').textContent = this._textPhoto;
    this._element.querySelector('.element__number').textContent = this._likes.length;
    this._imageElement.id = this._idImage;

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
        this._openBigPicture();
      }
      return this._element;
    });
  }
  
  _toggleLike = () => {
    this._isLiked = this._likeButton.classList.contains("element__like_filled");

    if (this._isLiked) {
      this._api.deleteLikeCard(this._element.querySelector('.element__image').id)
        .then((res) => {
          this._numberLikes.textContent = res.likes.length;
          this._likeButton.classList.remove("element__like_filled");
        })
        .catch(err => console.log(err));
    } else {
      this._api.likeCard(this._element.querySelector('.element__image').id)
        .then((res) => {
          this._numberLikes.textContent = res.likes.length;
          this._likeButton.classList.add("element__like_filled");
        })
        .catch(err => console.log(err));
    }
  }
  
  
  _deleteCard = () => {
    this._popupDeleteCard.open(this._element)
  }
  
  removeCard() {
    this._element.remove()
  }

  _openBigPicture = () => {
    this._classPopupWindowImg.open(this._textPhoto, this._srcImage);
    
  }
}

