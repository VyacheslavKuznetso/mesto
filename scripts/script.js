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


initialCards.forEach(forEachCards);

function createCard (element) {

    const cardElement = userTemplate.querySelector('.element').cloneNode(true);

    const textPhoto = cardElement.querySelector('.element__text-photo');

    const srcImage = cardElement.querySelector('.element__image');

    const elementLick = cardElement.querySelector('.element__like');

    const elementDeleteButton = cardElement.querySelector('.element__delete-button');

    textPhoto.textContent = element.name;
    srcImage.src = element.link; 
    srcImage.alt = element.name;




    elementLick.addEventListener("click", function (evt) {
        evt.target.classList.toggle("element__like_filled");
    }); 

    elementDeleteButton.addEventListener("click", function (evt) {
        evt.target.closest(".element").remove();
      }); 


    function openBigPicture (evt) {
        evt.target = openPopup(popupWindowImg);
        popupText.textContent = textPhoto.textContent;
        popupPicture.src = srcImage.src;
        popupPicture.alt = textPhoto.textContent;
        
    }
    srcImage.addEventListener('click', openBigPicture);

    return cardElement;
}


function forEachCards(element) {
    const userElement = createCard(element);
    elements.prepend(userElement);
}


function handleProfileFormSubmit (evt) {
    evt.preventDefault();

    profileTitle.textContent = popupFormInputTextName.value
    profileSubtitle.textContent = popupFormInputTextRole.value
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
}



function openPopup (popup) {
    popup.classList.add('popup_opened');
}


function closePopup (popup) {
    popup.classList.remove('popup_opened'); 
}


function handleCardFormSubmit (evt) {
    evt.preventDefault()

    const element = {
        name: popupFormInputTextImg.value,
        link: popupformInputSrcImg.value
    }

    forEachCards(element);
    evt.target.reset();
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
}



editButton.addEventListener('click', () => {
    popupFormInputTextName.value = profileTitle.textContent;
    popupFormInputTextRole.value = profileSubtitle.textContent;
    openPopup(profilePopup);
});
blockProfileAddButton.addEventListener('click', () => openPopup(addCardPopup));
closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
});
popupFormUserInfo.addEventListener('submit', handleProfileFormSubmit);
popupFormUserImg.addEventListener('submit', handleCardFormSubmit);
