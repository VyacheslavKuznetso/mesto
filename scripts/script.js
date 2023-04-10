let popup = document.querySelector('.edit-Form');
let editButton = document.querySelector('.profile__editButton');
let closeFormButton = document.querySelector('.edit-Form__close');
let nameInput = document.querySelector('.form__input_text_name');
let roleInput = document.querySelector('.form__input_text_role');
let elementSignature = document.querySelector('.element__signature');
let likeButton = elementSignature.querySelector('.element__like');
let currentUserName = document.querySelector('.profile__title');
let specially = document.querySelector('.profile__subtitle');

function openModal () {
    popup.classList.add('edit-Form__overlay_display_including');

    nameInput.value = currentUserName.innerHTML;
    roleInput.value = specially.innerHTML;
}


function formSubmitHandler (evt) {
    evt.preventDefault();

    currentUserName.innerHTML = nameInput.value;
    specially.innerHTML = roleInput.value;

    closeModal();
}

function closeModal () {
    popup.classList.remove('edit-Form__overlay_display_including');
}



closeFormButton.addEventListener('click', closeModal);

editButton.addEventListener('click', openModal);

popup.addEventListener('submit', formSubmitHandler);