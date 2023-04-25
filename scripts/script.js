const popupEditForm = document.querySelector('.edit-form');
const editButton = document.querySelector('.profile__edit-button');
const popupClose = document.querySelectorAll('.popup__close');
const editFormClose = document.querySelector('.popup__close_edit-form');
const addFormClose = document.querySelector('.popup__close_add-form');
const windowImgClose = document.querySelector('.popup__close_window-img')
const popupFormSubmitButton = document.querySelectorAll('.popup__form-submit-button');

const popupForm = document.querySelector('.popup__form');
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

const popupAddForm = document.querySelector('.add-form');
const popupOverlay = document.querySelector('.popup_overlay');
const blockProfileAddButton = document.querySelector('.block-profile__add-button');

const popupFormInputTextImg = document.querySelector('.popup__form-input_text_img');
const popupformInputSrcImg = document.querySelector('.popup__form-input_src_img');

const userTemplate = document.querySelector('#element').content;
const elements = document.querySelector('.elements');
const element = elements.querySelector('.element');



let popup = document.querySelector('.popup');




let initialCards = [
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


initialCards.forEach((element) => {
    forEachCards (element);
})

function forEachCards (element) {

    const userElement = userTemplate.querySelector('.element').cloneNode(true);

    const textPhoto = userElement.querySelector('.element__text-photo');

    const srcImage = userElement.querySelector('.element__image');

    const elementLick = userElement.querySelector('.element__like');

    const elementDeleteButton = userElement.querySelector('.element__delete-button');

    textPhoto.textContent = element.name;
    srcImage.src = element.link; 


    elements.prepend(userElement);



    function jkh (evt) {
        const button = evt.target;
    }
    
    elementLick.addEventListener('click', function(evt) {
        if(evt.target.classList.toggle('element__like_filled')) {
            jkh (evt);
        }
    });

    function kjnvjke (evt) {
        const button = evt.target;
    }

    elementDeleteButton.addEventListener('click', function(evt) {
        if(evt.target.closest('.element').remove()) {
            kjnvjke(evt);
        }
    });


    function ahbegrljhbe (evt) {
        if(srcImage === evt.target) {
            popupWindowImg.classList.add('popup_image');
        }
        popupText.textContent = textPhoto.textContent;
        popupPicture.src = srcImage.src;
        closePopupWindow ();
    }

    srcImage.addEventListener('click', ahbegrljhbe);
}





function reconciliationOpenPopup (evt) {
    if(editButton === evt.target) {
        popupFormInputTextName.value = profileTitle.textContent
        popupFormInputTextRole.value = profileSubtitle.textContent
        openPopup(popupEditForm);
    };
    if(blockProfileAddButton === evt.target) {
        popupFormInputTextImg.value = '';
        popupformInputSrcImg.value = '';
        openPopup(popupAddForm);
    }
}


function formSubmitHandler (evt) {
    evt.preventDefault();

    profileTitle.textContent = popupFormInputTextName.value
    profileSubtitle.textContent = popupFormInputTextRole.value
    closePopup(popupEditForm);
}






function openPopup (popup) {
    popup.classList.add('popup_overlay');
}



function close (evt) {
    if(editFormClose === evt.target) {
        closePopup(popupEditForm);
    };
    if(addFormClose === evt.target) {
        closePopup(popupAddForm);
    };
    if(windowImgClose === evt.target) {
        closePopupWindow(popupWindowImg);
    }
}

function closePopupWindow (popup) {
    popup.classList.remove('popup_image');
}

function closePopup (popup) {
    popup.classList.remove('popup_overlay');
}



function addFormSubmitHungler (evt) {
    evt.preventDefault()

    const userElement = userTemplate.querySelector('.element').cloneNode(true);

    let textPhoto = userElement.querySelector('.element__text-photo');

    let srcImage = userElement.querySelector('.element__image');

    const elementLick = userElement.querySelector('.element__like');

    const elementDeleteButton = userElement.querySelector('.element__delete-button');


    textPhoto.textContent = popupFormInputTextImg.value;
    srcImage.src = popupformInputSrcImg.value; 



    elements.prepend(userElement);

    function jkh (evt) {
        const button = evt.target;
    }
    
    elementLick.addEventListener('click', function(evt) {
        if(evt.target.classList.toggle('element__like_filled')) {
            jkh (evt)
        }
    });

    function kjnvjke (evt) {
        const button = evt.target;
    }

    elementDeleteButton.addEventListener('click', function(evt) {
        if(evt.target.closest('.element').remove()) {
            kjnvjke(evt)
        }
    });


    function ahbegrljhbe (evt) {
        if(srcImage === evt.target) {
            popupWindowImg.classList.add('popup_image');
        }
        popupText.textContent = textPhoto.textContent;
        popupPicture.src = srcImage.src;
        closePopupWindow ();
    }

    srcImage.addEventListener('click', ahbegrljhbe);

    closePopup(popupAddForm);
}



editButton.addEventListener('click', reconciliationOpenPopup);
blockProfileAddButton.addEventListener('click', reconciliationOpenPopup);
popupClose.forEach((button) => {
    button.addEventListener('click', close)
});
popupFormUserInfo.addEventListener('submit', formSubmitHandler);
popupFormUserImg.addEventListener('submit', addFormSubmitHungler);
