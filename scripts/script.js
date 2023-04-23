let popup = document.querySelector('.edit-form');
let form = document.querySelector('.form');
let editButton = document.querySelector('.profile__edit-button');
let closeFormButton = document.querySelector('.edit-form__close');
let nameInput = document.querySelector('.form__input_text_name');
let roleInput = document.querySelector('.form__input_text_role');
let elementSignature = document.querySelector('.element__signature');
let currentUserName = document.querySelector('.profile__title');
let specially = document.querySelector('.profile__subtitle');

let addButton = document.querySelector('.add-button');
let addForm = document.querySelector('.add-form');
let formImg = document.querySelector('#userImg');
let addCloseFormButton = document.querySelector('.add-form__close');
let formJourney = document.querySelector('#userImg');
let textInput = document.querySelector('.form__input_text_imd');
let srcInput = document.querySelector('.form__input_src_img');
let elements = document.querySelector('.elements');
let element = document.querySelector('.element');
const userTemplate = document.querySelector('#element').content;
let buttonSubmit = document.querySelector('.form__submit-button');

let elementTextPhoto = document.querySelectorAll('.element__text-photo');
let elementLikeList = document.querySelectorAll('.element__like');
let elementImageList = document.querySelectorAll('.element__image');

let deleteButton = document.querySelectorAll('.element__delete-button');


let windowImg = document.querySelector('.window-img');
let windowImgConteiner = document.querySelector('.window-img__conteiner');
let windowImgClose = document.querySelector('.window-img__close');
let windowImgPicture = document.querySelector('.window-img__picture');
let windowImgText = document.querySelector('.window-img__text');


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

function openFormAddImg() {
    addForm.classList.add('add-form_overlay');
    textInput.value = '';
    srcInput.value = '';
}

function addFormSubmitHungler (evt) {
    evt.preventDefault()

    const userElement = userTemplate.querySelector('.element').cloneNode(true);

    let textPhoto = userElement.querySelector('.element__text-photo');

    let srcImage = userElement.querySelector('.element__image');

    textPhoto.textContent = textInput.value;
    srcImage.src = srcInput.value; 

    elements.prepend(userElement);

    closeAddForm ();
}

function closeAddForm () {
    addForm.classList.remove('add-form_overlay');  
}


function onLikeEvent (evt) {
evt.target.classList.toggle('element__like_filled');
}


elementLikeList.forEach(function (element) {
    element.addEventListener('click', onLikeEvent);
});

function onDeleteButton (evt) {
    evt.target.closest('.element').remove();  
}

deleteButton.forEach(function(button){
    button.addEventListener('click', onDeleteButton)
});


function openWindowImg (evt) {
    element = evt.target;
    windowImg.classList.add('window-img_overlay');
    windowImgPicture.src = element.src;
    windowImgText.textContent = element.textContent;
}


elementImageList.forEach(function(img) {
    img.addEventListener('click', openWindowImg);
});


function removeSwo () {
    windowImg.classList.remove('window-img_overlay');
}






closeFormButton.addEventListener('click', closeModal);
editButton.addEventListener('click', openModal);
form.addEventListener('submit', formSubmitHandler); 
addButton.addEventListener('click', openFormAddImg);
formImg.addEventListener('submit', addFormSubmitHungler);
addCloseFormButton.addEventListener('click', closeAddForm);
windowImgClose.addEventListener('click', removeSwo);


// не могу разобраться, как мне нужно обнулить события, чтобы запустить заново forEach с новым количеством элементов в массиве и добавлять события. Ведь при удалении или добавлении элементов, события остаются, тем самым уменьшают быструю работу интерфейса, как мне кажется!

/*function removeEvtList () {
    removeEventListener('click', onLikeEvent);
    removeEventListener('click', onDeleteButton);
    removeEventListener('click', openWindowImg)
}*/