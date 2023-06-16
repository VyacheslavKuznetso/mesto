import '../pages/index.css'
import  Card  from '../components/Card.js'
import { FormValidator } from '../scripts/FormValidator.js'
import { initialCards } from '../components/InitialCards.js'
import { validationConfigs, blockProfile, profilePopup, popupWindowImg, popupsCloseButtons, popupFormUserInfo, popupFormUserImg, popupFormInputTextName, popupFormInputTextRole, profileTitle, profileSubtitle, popupAddCard, popupFormInputTextImg, popupformInputSrcImg, elements, cardTemplateSelector, selector, popups } from '../utils/constants.js'
import Section from '../components/Section.js'
import Popup from '../components/Popup.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'








const formValidators = {};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const formName = formElement.id;
    const validator = new FormValidator(config, formElement);
    validator.setEventListeners();
    formValidators[formName] = validator;
  });

};

enableValidation(validationConfigs);























const classPopupWindowImg = new PopupWithImage(popupWindowImg);

const cardList = new Section ({
  data: initialCards,
  renderer: (cardElement) => {
    const card = new Card (cardElement, elements, cardTemplateSelector, classPopupWindowImg);
    const fullCard = card.fillCard()
    cardList.addItem(fullCard)
  }
}, selector)

cardList.drawElement();


const userInfoPopup= new Popup (profilePopup);

const popupCard = new Popup (popupAddCard);

userInfoPopup.close();

popupCard.close();






const submitCallback = (forInput) => {

  if(forInput.commentImg && forInput.linkImg) {
    const values = {
      name: forInput.commentImg,
      link: forInput.linkImg
    }
  
    const cardInputElement = new Section ({
      data: [values],
      renderer: (element) => {
        const card = new Card (element, elements, cardTemplateSelector, classPopupWindowImg);
        const fullCard = card.fillCard()
        cardInputElement.addItem(fullCard)
      }
    }, selector)
    formValidators['userImg'].toggleButtonState()
    cardInputElement.drawElement();
  } else {
    
    userInfo.setUserInfo({ forInput })
  }

}





const formUserImg = new PopupWithForm(popupAddCard, submitCallback);
formUserImg.setEventListeners()
formUserImg.close



const formUserInfo = new PopupWithForm(profilePopup, submitCallback);
formUserInfo.setEventListeners()
formUserInfo.close

const userInfo = new UserInfo({ profileTitle, profileSubtitle }) 








blockProfile.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('profile__edit-button')) {
    const inform = userInfo.getUserInfo()
    popupFormInputTextName.value = inform.name;
    popupFormInputTextRole.value = inform.info;
    formValidators['userInfo'].toggleButtonState()
    userInfoPopup.open();
  }
  if (evt.target.classList.contains('block-profile__add-button')) {
    formValidators['userImg'].toggleButtonState()
    popupCard.open();
  }

})


popupsCloseButtons.forEach((button) => {
  const popupButton = new Popup(button.closest('.popup'));
  popupButton.setEventListeners()
});




















/*function handleCardFormSubmit (evt) {
  evt.preventDefault();

  const element = {
    name: popupFormInputTextImg.value,
    link: popupformInputSrcImg.value
  }
  const elementCard = createNewCard(element);
  prependCard(elementCard.fillCard());
  evt.target.reset();
  formValidators["form userImg"].toggleButtonState();
  closePopup(popupAddCard);
}

function handleProfileFormSubmit (evt) {
  evt.preventDefault();

  profileTitle.textContent = popupFormInputTextName.value;
  profileSubtitle.textContent = popupFormInputTextRole.value;
  formValidators["form userInfo"].toggleButtonState();

  closePopup(profilePopup);
}



popups.forEach((pop) => {
  pop.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      const popup = evt.target.closest('.popup');
      closePopup(popup);
    }
  })
})*/




/*
popupFormUserInfo.addEventListener('submit', handleProfileFormSubmit);

popupFormUserImg.addEventListener('submit', handleCardFormSubmit);
*/






/* const cardList = new Section ({
  data: initialCards,
  render: (cardElement) => {
    const card = new Card (cardElement, elements, cardTemplateSelector);
    const fullCard = card.fillCard()
    cardList.addItem(fullCard)
  }
}, selector);/*




/*blockProfile.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('profile__edit-button')) {
    popupFormInputTextName.value = profileTitle.textContent;
    popupFormInputTextRole.value = profileSubtitle.textContent;
    profilePopup.open();
  }
  if (evt.target.classList.contains('block-profile__add-button')) {
    popupAddCard.open();
  }

})


const cardList = new Section ({
  data: initialCards,
  render: (cardElement) => {
    const card = new Card (cardElement, elements, cardTemplateSelector);
    cardList.addItem(card)
  }
}, selector)



function handleCardFormSubmit (evt) {
  evt.preventDefault();

  const element = {
    name: popupFormInputTextImg.value,
    link: popupformInputSrcImg.value
  }
  const elementCard = createNewCard(element);
  prependCard(elementCard.fillCard());
  evt.target.reset();
  closePopup(popupAddCard);
}

function handleProfileFormSubmit (evt) {
  evt.preventDefault();

  profileTitle.textContent = popupFormInputTextName.value
  profileSubtitle.textContent = popupFormInputTextRole.value

  closePopup(profilePopup);
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

popupFormUserImg.addEventListener('submit', handleCardFormSubmit);*/