(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,r(o.key),o)}}function n(e,t,n){return(t=r(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(n)?n:String(n)}var o=function(){function e(t,r,o,i,u,l,c){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n(this,"_createCard",(function(){return a._cardElement=a._elements.querySelector(a._templateSelector).content.querySelector(".element").cloneNode(!0),a._id!==a._userId&&(a._deleteButton=a._cardElement.querySelector(".element__delete-button"),a._deleteButton.remove()),a._likes.some((function(e){return e._id===a._userId}))&&a._cardElement.querySelector(".element__like").classList.add("element__like_filled"),a._cardElement})),n(this,"_addEventListeners",(function(){a._element.addEventListener("click",(function(e){return e.target.classList.contains("element__like")&&a._toggleLike(),e.target.classList.contains("element__delete-button")&&a._deleteCard(),e.target.classList.contains("element__image")&&a._openBigPicture(),a._element}))})),n(this,"_toggleLike",(function(){a._isLiked=a._element.querySelector(".element__like").classList.contains("element__like_filled"),a._likeButton=a._element.querySelector(".element__like"),a._isLiked?a._api.deleteLikeCard(a._element.querySelector(".element__image").id).then((function(e){a._element.querySelector(".element__number").textContent=e.likes.length,a._likeButton.classList.remove("element__like_filled")})).catch((function(e){return console.log(e)})):a._api.likeCard(a._element.querySelector(".element__image").id).then((function(e){a._element.querySelector(".element__number").textContent=e.likes.length,a._likeButton.classList.add("element__like_filled")})).catch((function(e){return console.log(e)}))})),n(this,"_deleteCard",(function(){a._popupDeleteCard.open(a._element)})),n(this,"_openBigPicture",(function(){a._classPopupWindowImg.open(a._textPhoto,a._srcImage)})),this._textPhoto=t.name,this._srcImage=t.link,this._altImage=t.name,this._likes=t.likes,this._id=t.owner._id,this._idImage=t._id,this._elements=r,this._templateSelector=o,this._classPopupWindowImg=i,this._popupDeleteCard=u,this._api=l,this._userId=c.userData}var r,o;return r=e,(o=[{key:"fillCard",value:function(){return this._element=this._createCard(),this._imageElement=this._element.querySelector(".element__image"),this._imageElement.src=this._srcImage,this._imageElement.alt=this._altImage,this._element.querySelector(".element__text-photo").textContent=this._textPhoto,this._element.querySelector(".element__number").textContent=this._likes.length,this._imageElement.id=this._idImage,this._addEventListeners(this._element),this._element}}])&&t(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),e}();function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===i(o)?o:String(o)),r)}var o}var l=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=n,this._config=t,this._inputList=Array.from(this._formElement.querySelectorAll(this._config.inputSelector)),this._buttonElement=this._formElement.querySelector(this._config.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.setAttribute("disabled",!0),this._buttonElement.classList.remove(this._config.errorClass),this._buttonElement.classList.add(this._config.inactiveButtonClass)):(this._buttonElement.classList.add(this._config.errorClass),this._buttonElement.removeAttribute("disabled"),this._buttonElement.classList.remove(this._config.inactiveButtonClass))}},{key:"_showInputError",value:function(e,t){this._errorElement=this._formElement.querySelector("#".concat(e.id,"-error")),e.classList.add(this._config.inputErrorClass),this._errorElement.classList.add(this._config.spenMessageError),this._errorElement.textContent=t}},{key:"_hideInputError",value:function(e){this._errorElement=this._formElement.querySelector("#".concat(e.id,"-error")),e.classList.remove(this._config.inputErrorClass),this._errorElement.classList.remove(this._config.spenMessageError),this._errorElement.textContent=""}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e.toggleButtonState()}))})),this.toggleButtonState()}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),c=document.querySelector(".edit-form"),a=document.querySelector(".profile__edit-button"),s=document.querySelector(".block-profile__add-button"),f=document.querySelector(".window-img"),p=document.querySelector(".popup__form-input_text_name"),y=document.querySelector(".popup__form-input_text_role"),m=document.querySelector(".profile__title"),h=document.querySelector(".profile__subtitle"),_=document.querySelector(".add-form"),b=document.querySelector(".elements"),d=document.querySelector(".edit-avatar"),v=document.querySelector(".profile__edit-avatar-button"),g=document.querySelector(".delete"),S=document.querySelector(".profile__avatar"),w=document.querySelector(".popup__form-input_edit_avatar");function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==E(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===E(o)?o:String(o)),r)}var o}var O=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"drawElement",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.append(e)}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==P(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===P(o)?o:String(o)),r)}var o}var C=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._closeButton=this._popup.querySelector(".popup__close"),this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClick=this._handleOverlayClick.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOverlayClick",value:function(e){e.target.classList.contains("popup_opened")&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",this._handleOverlayClick),this._closeButton.addEventListener("click",(function(){return e.close()}))}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==L(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},q.apply(this,arguments)}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupPicture=t._popup.querySelector(".popup__picture"),t._popupText=t._popup.querySelector(".popup__text"),t}return t=u,(n=[{key:"open",value:function(e,t){q(T(u.prototype),"open",this).call(this),this._popupPicture.src=t,this._popupPicture.alt=e,this._popupText.textContent=e}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(C);function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,N(r.key),r)}}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=M(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},A.apply(this,arguments)}function D(e,t){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},D(e,t)}function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},M(e)}function N(e){var t=function(e,t){if("object"!==B(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===B(t)?t:String(t)}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&D(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=M(r);if(o){var n=M(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===B(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return F(e)}(this,e)});function u(e,t){var n,r,o,l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),r=F(n=i.call(this,e)),l=function(){return n._values={},n.inputList.forEach((function(e){n._values[e.name]=e.value})),n._values},(o=N(o="_getInputValues"))in r?Object.defineProperty(r,o,{value:l,enumerable:!0,configurable:!0,writable:!0}):r[o]=l,n._popupForm=n._popup.querySelector(".popup__form"),n.inputList=n._popupForm.querySelectorAll(".popup__form-input"),n._submitButton=n._popup.querySelector(".popup__form-submit-button"),n._submitCallback=t,n}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;A(M(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),"Сохранить"===e._submitButton.textContent?e._submitButton.textContent="Сохранение...":e._submitButton.textContent="Создание...",e.forInput=e._getInputValues(),e._submitCallback(e.forInput),e.close()}))}},{key:"close",value:function(){A(M(u.prototype),"close",this).call(this),this._popupForm.reset()}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(C);function J(e){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J(e)}function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==J(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==J(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===J(o)?o:String(o)),r)}var o}var W=function(){function e(t){var n=t.profileTitle,r=t.profileSubtitle,o=t.profileAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=n,this._infoElement=r,this._profileAvatar=o}var t,n;return t=e,(n=[{key:"downloadUserInfo",value:function(e){this._nameElement.textContent=e.name,this._infoElement.textContent=e.about,this._profileAvatar.src=e.avatar,this._userData=e._id}},{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,about:this._infoElement.textContent,avatar:this._profileAvatar.src,userData:this._userData}}}])&&H(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function z(e){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z(e)}function $(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==z(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==z(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===z(o)?o:String(o)),r)}var o}function G(){return G="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Q(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},G.apply(this,arguments)}function K(e,t){return K=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},K(e,t)}function Q(e){return Q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Q(e)}var X=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&K(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Q(r);if(o){var n=Q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===z(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._deleteForm=n._popup.querySelector(".popup__form"),n._submitCallback=t,n}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;G(Q(u.prototype),"setEventListeners",this).call(this),this._deleteForm.addEventListener("submit",(function(t){t.preventDefault(),e._submitCallback(e._element)}))}},{key:"open",value:function(e){G(Q(u.prototype),"open",this).call(this),this._element=e}}])&&$(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(C);function Y(e){return Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y(e)}function Z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==Y(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==Y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===Y(o)?o:String(o)),r)}var o}var ee=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"postUserInfo",value:function(e){fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.userName,about:e.userRole})}).then(this._checkResponse)}},{key:"postUserAvatar",value:function(e){fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.linkAvatar})}).then(this._checkResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"addCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"likeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"deleteLikeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}}])&&Z(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ne,re={};ne={formSelector:".popup__form",inputSelector:".popup__form-input",submitButtonSelector:".popup__form-submit-button",inactiveButtonClass:"popup__form-submit-button_disabled",inputErrorClass:"popup__input_type_error",spenMessageError:"popup__message_input-error",errorClass:"popup__form-submit-button_visible"},Array.from(document.querySelectorAll(ne.formSelector)).forEach((function(e){var t=e.id,n=new l(ne,e);n.setEventListeners(),re[t]=n}));var oe=new ee({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-69",headers:{authorization:"68ba550e-5b32-4477-ae61-93c3a6a6c328","Content-Type":"application/json"}}),ie=new X(g,(function(e){oe.deleteCard(e.querySelector(".element__image").id).catch((function(t){console.log(t),e.remove()})).catch((function(e){return console.log(e)}))}));ie.setEventListeners();var ue=new x(f);ue.setEventListeners();var le=new O({renderer:function(e){var t=function(e){var t=new o(e,b,"#element",ue,ie,oe,fe.getUserInfo());return t.fillCard(),t}(e),n=t.fillCard();le.addItem(n)}},".elements"),ce=new V(_,(function(e){var t={name:e.commentImg,link:e.linkImg};oe.addCard(t).then((function(e){console.log(e)})).catch((function(e){return console.log(e)}))}));ce.setEventListeners(),Promise.all([oe.getUserInfo(),oe.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,l=[],c=!0,a=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){a=!0,o=e}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(a)throw o}}return l}}(t,n)||function(e,t){if(e){if("string"==typeof e)return te(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?te(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];fe.downloadUserInfo(o),le.drawElement(i)})).catch((function(e){console.log(e)}));var ae=new V(c,(function(e){oe.postUserInfo(e)}));ae.setEventListeners();var se=new V(d,(function(e){oe.postUserAvatar(e)}));se.setEventListeners();var fe=new W({profileTitle:m,profileSubtitle:h,profileAvatar:S});a.addEventListener("click",(function(){var e=fe.getUserInfo();p.value=e.name,y.value=e.about,re.userInfo.toggleButtonState(),ae.open()})),s.addEventListener("click",(function(){re.userImg.toggleButtonState(),ce.open()})),v.addEventListener("click",(function(){var e=fe.getUserInfo();w.value=e.avatar,re.editAvatarForm.toggleButtonState(),se.open()}))})();