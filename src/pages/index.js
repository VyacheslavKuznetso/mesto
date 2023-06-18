import './index.css'
import  Card  from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js'
import { initialCards } from '../utils/data/InitialCards.js'
import { validationConfigs, profilePopup, popupWindowImg, popupFormInputTextName, popupFormInputTextRole, profileTitle, profileSubtitle, popupAddCard, elements, cardTemplateSelector, selector, profileEditButton, profileAddButton } from '../utils/constants.js'
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

classPopupWindowImg.setEventListeners()

const createCard = (cardElement) => {
  const card = new Card (cardElement, elements, cardTemplateSelector, classPopupWindowImg);
  return card
}

const cardList = new Section ({
  data: initialCards,
  renderer: (cardElement) => {
    const card = createCard(cardElement);
    const fullCard = card.fillCard()
    cardList.addItem(fullCard)
  }
}, selector)

cardList.drawElement();

const userInfoPopup= new Popup (profilePopup);

const popupCard = new Popup (popupAddCard);




const submitCallbackImg = (forInput) => {

    const values = {
      name: forInput.commentImg,
      link: forInput.linkImg
    }

    const card = createCard(values);
    const fullCard = card.fillCard();
    cardList.addItem(fullCard);

}

const submitCallbackInfo = (forInput) => {
  userInfo.setUserInfo({ forInput })
}

const formUserImg = new PopupWithForm(popupAddCard, submitCallbackImg);
formUserImg.setEventListeners()



const formUserInfo = new PopupWithForm(profilePopup, submitCallbackInfo);
formUserInfo.setEventListeners()

const userInfo = new UserInfo({ profileTitle, profileSubtitle }) 

const openProfileEdit = () => {
  const inform = userInfo.getUserInfo()
  popupFormInputTextName.value = inform.name;
  popupFormInputTextRole.value = inform.info;
  formValidators['userInfo'].toggleButtonState()
  userInfoPopup.open();
}

const openProfileAdd = () => {
  formValidators['userImg'].toggleButtonState()
  popupCard.open();
}

profileEditButton.addEventListener('click', openProfileEdit)

profileAddButton.addEventListener('click', openProfileAdd)