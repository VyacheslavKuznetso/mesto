import '../pages/index.css'
import  Card  from '../components/Card.js'
import { FormValidator } from '../scripts/FormValidator.js'
import { initialCards } from '../components/InitialCards.js'
import { validationConfigs, blockProfile, profilePopup, popupWindowImg, popupsCloseButtons, popupFormUserInfo, popupFormUserImg, popupFormInputTextName, popupFormInputTextRole, profileTitle, profileSubtitle, popupAddCard, popupFormInputTextImg, popupformInputSrcImg, elements, cardTemplateSelector, selector, popups } from '../utils/constants.js'
import Section from '../components/Section.js'
import Popup from '../components/Popup.js'


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



const elementCard = new Section(
  {
    items: initialCards,
    renderer: (userInfo) => {
      const item = new Card (userInfo, elements,  cardTemplateSelector)
      const card = item.fillCard()
      elementCard.addItem(card)
    }
  },
  selector
)



const submitCallback = (values, evt) => {
  evt.preventDefault();
  const element = {
    name: values.commentImg.value,
    link: values.linkImg.value
  }

  const cardValue = new Section(
    {
      elements: element,
      renderer: (userInfo) => {
        const item = new Card (userInfo, elements,  cardTemplateSelector)
        const card = item.fillCard()
        cardValue.addItem(card)
      }
    },
    selector
  )
  formValidators["form userImg"].toggleButtonState();
  close()
}

popupsCloseButtons.forEach((button) => {
  const popupButton = new Popup(button.closest('.popup'));
  popupButton.setEventListeners()
});













blockProfile.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('profile__edit-button')) {
    popupFormInputTextName.value = profileTitle.textContent;
    popupFormInputTextRole.value = profileSubtitle.textContent;
    profilePopup.open();
  }
  if (evt.target.classList.contains('block-profile__add-button')) {
    popupAddCard.open();
  }

})