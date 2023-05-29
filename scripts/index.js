import { Card } from './Card.js'
import { FormValidator } from './FormValidator.js'
import { initialCards } from './InitialCards.js'

const blockProfile = document.querySelector('.block-profile');
const profilePopup = document.querySelector('.edit-form');


const popupWindowImg = document.querySelector('.window-img');

const popupsCloseButtons = document.querySelectorAll('.popup__close');

const popupFormUserInfo = document.querySelector('#userInfo');
const popupFormUserImg = document.querySelector('#userImg');
const popupFormInputTextName = document.querySelector('.popup__form-input_text_name');
const popupFormInputTextRole = document.querySelector('.popup__form-input_text_role');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const popupAddCard = document.querySelector('.add-form');

const popupFormInputTextImg = document.querySelector('.popup__form-input_text_img');
const popupformInputSrcImg = document.querySelector('.popup__form-input_src_img');

const elements = document.querySelector('.elements');
const cardTemplateSelector = '#element';

const popups = document.querySelectorAll('.popup');





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
  formList.forEach((formElement) => {
    const formName = `form ${formElement.id}`;
    const validator = new FormValidator(config, formElement);
    validator.setEventListeners();
    formValidators[formName] = validator;
  });
};



enableValidation(validationConfigs);

const prependCard = (userElement) => {
  elements.prepend(userElement);
}

function creationNewCard (element) {
  const elementCard = new Card(element, elements, cardTemplateSelector, openPopup, popupWindowImg);
  return elementCard
}

initialCards.forEach((cardData) => {
  creationNewCard(cardData)
  const elementCard = creationNewCard(cardData)
  prependCard(elementCard.fillCard());
});

function handleCardFormSubmit (evt) {
  evt.preventDefault();

  const element = {
    name: popupFormInputTextImg.value,
    link: popupformInputSrcImg.value
  }
  const elementCard = creationNewCard(element);
  prependCard(elementCard.fillCard());
  evt.target.reset();
  closePopup(popupAddCard);
  toggleButtonState();
}

function handleProfileFormSubmit (evt) {
  evt.preventDefault();

  profileTitle.textContent = popupFormInputTextName.value
  profileSubtitle.textContent = popupFormInputTextRole.value

  closePopup(profilePopup);
  toggleButtonState();
}

function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);

}


function closePopup (popup) {
  popup.classList.remove('popup_opened'); 
  document.removeEventListener('keydown', closeByEscape);

}

function closeByEscape (evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
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
    openPopup(popupAddCard);
  }

})


popupsCloseButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

popupFormUserInfo.addEventListener('submit', handleProfileFormSubmit);

popupFormUserImg.addEventListener('submit', handleCardFormSubmit);



