import './index.css'
import  Card  from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js'
import { validationConfigs, profilePopup, popupWindowImg, popupFormInputTextName, popupFormInputTextRole, profileTitle, profileSubtitle, popupAddCard, elements, cardTemplateSelector, selector, profileEditButton, profileAddButton, popupEditAvatar, profileEditAvatar, popupDelete, profileAvatar, popupFormInputEditAvatar } from '../utils/constants.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'
import PopupDeleteCard from '../components/PopupDeleteCard.js'
import { Api } from '../components/Api.js'


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




const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-69',
  headers: {
    authorization: '68ba550e-5b32-4477-ae61-93c3a6a6c328', 
    'Content-Type': 'application/json'
  }
});




const deleteCardS = (element) => {
  api.deleteCard(element.querySelector('.element__image').id)
   .catch((res) => {
     console.log(res);
    element.remove()
   })
   .catch(err => console.log(err))
}

const popupDeleteCard = new PopupDeleteCard(popupDelete, deleteCardS);

popupDeleteCard.setEventListeners()

const classPopupWindowImg = new PopupWithImage(popupWindowImg);

classPopupWindowImg.setEventListeners()



const createCard = (cardElement) => { 
  const card = new Card (cardElement, elements, cardTemplateSelector, classPopupWindowImg, popupDeleteCard, api, userInfo.getUserInfo());
  card.fillCard()
  return card
}

const cardList = new Section({
  renderer: (cardElement) => {
    const card = createCard(cardElement);
    const fullCard = card.fillCard();
    cardList.addItem(fullCard);
  }
}, selector);








const submitCallbackImg = (forInput) => { 

    const values = {
      name: forInput.commentImg,
      link: forInput.linkImg
    }

    api.addCard(values)
     .then((res) => {
      console.log(res);
      
     })
     .catch(err => console.log(err))
     

}





const formUserImg = new PopupWithForm(popupAddCard, submitCallbackImg);
formUserImg.setEventListeners()


Promise.all([api.getUserInfo(), api.getInitialCards()])
// тут деструктурируете ответ от сервера, чтобы было понятнее, что пришло
  .then(([userData, cards]) => {
    userInfo.downloadUserInfo(userData);
    cardList.drawElement(cards);
  })
  .catch(err => {
    console.log(err);
  });



const submitCallbackInfo = (getUserInfo) => {
  api.postUserInfo(getUserInfo)
  
}

const formUserInfo = new PopupWithForm(profilePopup, submitCallbackInfo);
formUserInfo.setEventListeners()



const submitCallbackAvatar = (getUserInfo) => {
  api.postUserAvatar(getUserInfo)
}


const formEditAvatar = new PopupWithForm(popupEditAvatar, submitCallbackAvatar)
formEditAvatar.setEventListeners()


const userInfo = new UserInfo({ profileTitle, profileSubtitle, profileAvatar }) 


const openProfileEdit = () => {
  const inform = userInfo.getUserInfo()
  popupFormInputTextName.value = inform.name;
  popupFormInputTextRole.value = inform.about;
  formValidators['userInfo'].toggleButtonState();
  formUserInfo.open();
}




const openProfileAdd = () => {
  formValidators['userImg'].toggleButtonState()
  formUserImg.open();
}

const openProfileAvatar = () => {
  const inform = userInfo.getUserInfo();
  popupFormInputEditAvatar.value = inform.avatar
  formValidators['editAvatarForm'].toggleButtonState()
  formEditAvatar.open();
  
}

profileEditButton.addEventListener('click', openProfileEdit);

profileAddButton.addEventListener('click', openProfileAdd);

profileEditAvatar.addEventListener('click', openProfileAvatar)

