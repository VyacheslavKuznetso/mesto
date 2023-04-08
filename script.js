let formElement = document.querySelector('#formWrapper')
let profileInfo = document.querySelector('.profile-info')
let editButton = document.querySelector('#editUser')
let closeFormButton = document.querySelector('#closeForm')
let nameInput = document.querySelector('.form__name');
let roleInput = document.querySelector('.form__role');
let likeButton = document.querySelector('.footer-image__element-like');

function oneClick () {

    let active = formElement.classList.add('active');

    let currentUserName = document.querySelector('#currentUserName');
    
    let specially = document.querySelector('#specially');

    const inputName = document.querySelector('input[name="userName"]');

    const inputRole = document.querySelector('input[name="userRole"]');

    inputName.value = currentUserName.innerHTML;
    inputRole.value = specially.innerHTML;


}

editButton.addEventListener('click', oneClick);



function formSubmitHandler (evt) {
    evt.preventDefault();
    
    let currentUserName = document.querySelector('#currentUserName');
    
    let specially = document.querySelector('#specially');

    const inputName = document.querySelector('input[name="userName"]');

    const inputRole = document.querySelector('input[name="userRole"]');

    currentUserName.innerHTML = inputName.value
    specially.innerHTML = inputRole.value

 

    closeFormCleck();
}

formElement.addEventListener('submit', formSubmitHandler);


function closeFormCleck () {
    let noActive = formElement.classList.remove('active');
}

closeFormButton.addEventListener('click', closeFormCleck);

