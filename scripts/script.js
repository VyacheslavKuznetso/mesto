let popup = document.querySelector('.edit-form');
let form = document.querySelector('.form')
let editButton = document.querySelector('.profile__edit-button');
let closeFormButton = document.querySelector('.edit-form__close');
let nameInput = document.querySelector('.form__input_text_name');
let roleInput = document.querySelector('.form__input_text_role');
let elementSignature = document.querySelector('.element__signature');
let likeButton = elementSignature.querySelector('.element__like');
let currentUserName = document.querySelector('.profile__title');
let specially = document.querySelector('.profile__subtitle');

function openModal () {
    popup.classList.add('edit-form_overlay');

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
    popup.classList.remove('edit-form_overlay');
}



closeFormButton.addEventListener('click', closeModal);

editButton.addEventListener('click', openModal);

form.addEventListener('submit', formSubmitHandler);