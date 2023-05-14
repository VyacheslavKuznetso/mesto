const blockProfile = document.querySelector('.block-profile');
const profilePopup = document.querySelector('.edit-form');
const editButton = document.querySelector('.profile__edit-button');
const closeButtons = document.querySelectorAll('.popup__close');
const editFormClose = document.querySelector('.popup__close_edit-form');
const addFormClose = document.querySelector('.popup__close_add-form');
const windowImgClose = document.querySelector('.popup__close_window-img')

const profileForm = document.querySelector('.popup__form');
const popupFormUserInfo = document.querySelector('#userInfo');
const popupFormUserImg = document.querySelector('#userImg')
const popupFormInputTextName = document.querySelector('.popup__form-input_text_name');
const popupFormInputTextRole = document.querySelector('.popup__form-input_text_role');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');


const popupWindowImg = document.querySelector('.window-img');
const popupPicture = document.querySelector('.popup__picture');
const popupText = document.querySelector('.popup__text');
const popupImage = document.querySelector('.popup_image')

const addCardPopup = document.querySelector('.add-form');
const blockProfileAddButton = document.querySelector('.block-profile__add-button');

const popupFormInputTextImg = document.querySelector('.popup__form-input_text_img');
const popupformInputSrcImg = document.querySelector('.popup__form-input_src_img');

const userTemplate = document.querySelector('#element').content;
const elements = document.querySelector('.elements');
const element = elements.querySelector('.element');

const elementLick = document.querySelector('.element__like');

const elementDeleteButton = document.querySelector('.element__delete-button');
const popups = document.querySelectorAll('.popup')



const profileEditSubmitButton = profilePopup.querySelector('.popup__form-submit-button');
const addCardPopupSubmitButton = addCardPopup.querySelector('.popup__form-submit-button')



initialCards.forEach(prependCard);

function createCard (element) {

  const cardElement = userTemplate.querySelector('.element').cloneNode(true);

  const textPhoto = cardElement.querySelector('.element__text-photo');

  const srcImage = cardElement.querySelector('.element__image');


  textPhoto.textContent = element.name;
  srcImage.src = element.link; 
  srcImage.alt = element.name;



  function openBigPicture () {
    openPopup(popupWindowImg);
    popupText.textContent = textPhoto.textContent;
    popupPicture.src = srcImage.src;
    popupPicture.alt = textPhoto.textContent;
        
  }
  srcImage.addEventListener('click', openBigPicture);

  return cardElement;
}


function prependCard(element) {
  const userElement = createCard(element);
  elements.prepend(userElement);
}


function handleProfileFormSubmit (evt) {
  evt.preventDefault();

  profileTitle.textContent = popupFormInputTextName.value
  profileSubtitle.textContent = popupFormInputTextRole.value

  profileEditSubmitButton.setAttribute('disabled', true);
  profileEditSubmitButton.classList.add('popup__form-submit-button_disabled');
  profileEditSubmitButton.classList.remove('popup__form-submit-button_disabled');

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


function handleCardFormSubmit (evt) {
  evt.preventDefault()

  const element = {
    name: popupFormInputTextImg.value,
    link: popupformInputSrcImg.value
  }
  
  prependCard (element);
  evt.target.reset();
  closePopup(addCardPopup);
  addCardPopupSubmitButton.setAttribute('disabled', true);
  addCardPopupSubmitButton.classList.add('popup__form-submit-button_disabled');
  addCardPopupSubmitButton.classList.remove('popup__form-submit-button_visible');
}

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup)
  }
}


popups.forEach((pop) => {
  pop.addEventListener('click', (evt) => {
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

elements.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('element__like')) {
    evt.target.classList.toggle("element__like_filled");
  }

  if (evt.target.classList.contains('element__delete-button')) {
    evt.target.closest(".element").remove();
  }
})


