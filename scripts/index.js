import { Card, openPopup, closePopup, closeByEscape } from './card.js';
import { FormValidator } from './FormValidator.js'
const blockProfile = document.querySelector('.block-profile');
const profilePopup = document.querySelector('.edit-form');

const closeButtons = document.querySelectorAll('.popup__close');

const popupFormUserInfo = document.querySelector('#userInfo');
const popupFormUserImg = document.querySelector('#userImg');
const popupFormInputTextName = document.querySelector('.popup__form-input_text_name');
const popupFormInputTextRole = document.querySelector('.popup__form-input_text_role');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const addCardPopup = document.querySelector('.add-form');

const popupFormInputTextImg = document.querySelector('.popup__form-input_text_img');
const popupformInputSrcImg = document.querySelector('.popup__form-input_src_img');

const elements = document.querySelector('.elements');
const cardElement = '#element';

const popups = document.querySelectorAll('.popup');

const profileEditSubmitButton = profilePopup.querySelector('.popup__form-submit-button');
const addCardPopupSubmitButton = addCardPopup.querySelector('.popup__form-submit-button');





const initialCards = [
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

const validationConfigs = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__form-submit-button',
  inactiveButtonClass: 'popup__form-submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  spenMessageError: 'popup__message_input-error',
  errorClass: 'popup__form-submit-button_visible'
}



const formValidators = {};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement, index) => {
    const formName = `form${index + 1}`;
    const validator = new FormValidator(config, formElement);
    validator.setEventListeners();
    formValidators[formName] = validator;
  });
};



enableValidation(validationConfigs);

const prependCard = (userElement) => {
  elements.prepend(userElement);
}

initialCards.forEach((cardData) => {
  const elementCard = new Card(cardData, elements, cardElement);
  prependCard(elementCard.fillCard());
});

function handleCardFormSubmit (evt) {
  evt.preventDefault();

  const element = {
    name: popupFormInputTextImg.value,
    link: popupformInputSrcImg.value
  }
  const elementCard = new Card(element, elements, cardElement);
  prependCard(elementCard.fillCard());
  evt.target.reset();
  closePopup(addCardPopup);
  addCardPopupSubmitButton.setAttribute('disabled', true); 
  addCardPopupSubmitButton.classList.add('popup__form-submit-button_disabled'); 
  addCardPopupSubmitButton.classList.remove('popup__form-submit-button_visible'); 
   // метод toggleButtonState() срабативает один раз- я не могу разобраться почему (когда открыватся форма popupFormUserImg, кнопка не активна, т.к. поля не валидны), после добавления карточки в DOM, и при повторном открытии popupFormUserImg кнопка активна, хотя инпуты не валидны(они не заполнены). Но стоит добавить один символ, то валидация срабатывает и делает кнопку неактивной.
}

function handleProfileFormSubmit (evt) {
  evt.preventDefault();

  profileTitle.textContent = popupFormInputTextName.value
  profileSubtitle.textContent = popupFormInputTextRole.value

  closePopup(profilePopup);
  addCardPopupSubmitButton.setAttribute('disabled', true); 
  addCardPopupSubmitButton.classList.add('popup__form-submit-button_disabled'); 
  addCardPopupSubmitButton.classList.remove('popup__form-submit-button_visible'); 
   // а тут наоборот - при открытии popupFormUserInfo кнопка не активна, хотя формы валидны(они заполнены), но стоит добавить один символ, то срабатывает валидация и кнопка актина. Последующие откратия формы, кнопка активна - работает правильно. Прошу меня направить и чуть-чуть мне подсказать, для исправления кода и функциональности 
}


popups.forEach((pop) => {
  pop.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      const popup = evt.target.closest('.popup')
      closePopup(popup)
    }
  })
})


blockProfile.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('profile__edit-button')) {
    popupFormInputTextName.value = profileTitle.textContent;
    popupFormInputTextRole.value = profileSubtitle.textContent;
    openPopup(profilePopup);
  }
  if (evt.target.classList.contains('block-profile__add-button')) {
    openPopup(addCardPopup);
  }

})


closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

popupFormUserInfo.addEventListener('submit', handleProfileFormSubmit);

popupFormUserImg.addEventListener('submit', handleCardFormSubmit);



