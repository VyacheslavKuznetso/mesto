let formElement = document.querySelector('.edit-Form');
let editButton = document.querySelector('.profile-info__edit-Button');
let closeFormButton = document.querySelector('.conteiner__close');
let nameInput = document.querySelector('.form__input_text-name');
let roleInput = document.querySelector('.form__input_text-role');
let elementSignature = document.querySelector('.element__signature');
let likeButton = elementSignature.querySelector('.element__like');
let currentUserName = document.querySelector('.profile-info__UserName');
let specially = document.querySelector('.profile-info__specially');

function showForm () {
    let active = formElement.classList.add('overlay');

    nameInput.value = currentUserName.innerHTML;
    roleInput.value = specially.innerHTML;
}


function formSubmitHandler (evt) {
    evt.preventDefault();

    currentUserName.innerHTML = nameInput.value;
    specially.innerHTML = roleInput.value;

    closeFormCleck();
}

function closeFormCleck () {
    formElement.classList.remove('overlay');
}



closeFormButton.addEventListener('click', closeFormCleck);

editButton.addEventListener('click', showForm);

formElement.addEventListener('submit', formSubmitHandler);