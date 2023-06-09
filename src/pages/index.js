import './index.css'
import Card from '../components/Card.js'
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




const deleteCard = (element) => {
  api.deleteCard(element.querySelector('.element__image').id)
    .then((res) => {
      console.log(res);
      element.remove()
      popupDeleteCard.close()
    })
    .catch(console.error)
}

const popupDeleteCard = new PopupDeleteCard(popupDelete, deleteCard);

popupDeleteCard.setEventListeners()

const classPopupWindowImg = new PopupWithImage(popupWindowImg);

classPopupWindowImg.setEventListeners()



const createCard = (cardElement) => {
  const card = new Card(cardElement, elements, cardTemplateSelector, classPopupWindowImg, popupDeleteCard, api, userInfo.getUserInfo());
  return card.generateCard()
}

const cardList = new Section({
  renderer: (cardElement) => {
    const card = createCard(cardElement);
    cardList.addItem(card);
  }
}, selector);








const submitCallbackImg = (forInput) => {

  const values = {
    name: forInput.commentImg,
    link: forInput.linkImg
  }

  formUserImg.renderLoading(true, 'Создание...')
  api.addCard(values)
    .then((res) => {
      const card = createCard(res);
      cardList.addItem(card);
      formUserImg.close()

    })
    .catch(console.error)
    .finally(() => {
      formUserImg.renderLoading(false)
    })


}





const formUserImg = new PopupWithForm(popupAddCard, submitCallbackImg);
formUserImg.setEventListeners()


Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userInfo.downloadUserInfo(userData);
    cardList.drawElement(cards);
  })
  .catch(console.error)



const submitCallbackInfo = (getUserInfo) => {
  formUserInfo.renderLoading(true)
  api.postUserInfo(getUserInfo)
    .then((res) => {
      userInfo.downloadUserInfo(res);
      formUserInfo.close()
    })
    .catch(console.error)
    .finally(() => {
      formUserInfo.renderLoading(false)
    })

}

const formUserInfo = new PopupWithForm(profilePopup, submitCallbackInfo);
formUserInfo.setEventListeners()



const submitCallbackAvatar = (getUserInfo) => {
  formEditAvatar.renderLoading(true)
  api.postUserAvatar(getUserInfo)
    .then((res) => {
      userInfo.downloadUserInfo(res)
      formEditAvatar.close()
    })
    .catch(console.error)
    .finally(() => {
      formEditAvatar.renderLoading(false)
    })
}


const formEditAvatar = new PopupWithForm(popupEditAvatar, submitCallbackAvatar)
formEditAvatar.setEventListeners()


const userInfo = new UserInfo({ profileTitle, profileSubtitle, profileAvatar })


const openProfileEdit = () => {
  const inform = userInfo.getUserInfo()
  popupFormInputTextName.value = inform.name;
  popupFormInputTextRole.value = inform.about;
  formValidators['userInfo'].resetValidation();
  formUserInfo.open();
}




const openProfileAdd = () => {
  formValidators['userImg'].resetValidation()
  formUserImg.open();
}

const openProfileAvatar = () => {
  const inform = userInfo.getUserInfo();
  popupFormInputEditAvatar.value = inform.avatar
  formValidators['editAvatarForm'].resetValidation()
  formEditAvatar.open();

}

profileEditButton.addEventListener('click', openProfileEdit);

profileAddButton.addEventListener('click', openProfileAdd);

profileEditAvatar.addEventListener('click', openProfileAvatar)

