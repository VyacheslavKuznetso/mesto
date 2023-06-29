(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,r(o.key),o)}}function n(e,t,n){return(t=r(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(n)?n:String(n)}var o=function(){function e(t,r,o,i,u,c){var l=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n(this,"_createCard",(function(){return l._cardElement=l._elements.querySelector(l._templateSelector).content.querySelector(".element").cloneNode(!0),"63a2eebb172f06db6050c3a2"!==l._id&&(l._deleteButton=l._cardElement.querySelector(".element__delete-button"),l._deleteButton.remove()),l._likes.some((function(e){return"63a2eebb172f06db6050c3a2"===e._id}))&&l._cardElement.querySelector(".element__like").classList.add("element__like_filled"),l._cardElement})),n(this,"_addEventListeners",(function(){l._element.addEventListener("click",(function(e){return e.target.classList.contains("element__like")&&l._toggleLike(),e.target.classList.contains("element__delete-button")&&l._deleteCard(),e.target.classList.contains("element__image")&&l._openBigPicture(),l._element}))})),n(this,"_toggleLike",(function(){l._isLiked=l._element.querySelector(".element__like").classList.contains("element__like_filled"),l._isLiked?l._api.deleteLikeCard(l._element.querySelector(".element__image").id).then((function(e){l._element.querySelector(".element__number").textContent=e.likes.length,l._element.querySelector(".element__like").classList.remove("element__like_filled")})).catch((function(e){return console.log(e)})):l._api.likeCard(l._element.querySelector(".element__image").id).then((function(e){l._element.querySelector(".element__number").textContent=e.likes.length,l._element.querySelector(".element__like").classList.add("element__like_filled")})).catch((function(e){return console.log(e)}))})),n(this,"_deleteCard",(function(){l._popupDeleteCard.open(l._element)})),n(this,"_openBigPicture",(function(){l._classPopupWindowImg.open(l._textPhoto,l._srcImage)})),this._textPhoto=t.name,this._srcImage=t.link,this._altImage=t.name,this._likes=t.likes,this._id=t.owner._id,this._idImage=t._id,this._elements=r,this._templateSelector=o,this._classPopupWindowImg=i,this._popupDeleteCard=u,this._api=c}var r,o;return r=e,(o=[{key:"fillCard",value:function(){return this._element=this._createCard(),this._imageElement=this._element.querySelector(".element__image"),this._imageElement.src=this._srcImage,this._imageElement.alt=this._altImage,this._element.querySelector(".element__text-photo").textContent=this._textPhoto,this._element.querySelector(".element__number").textContent=this._likes.length,this._imageElement.id=this._idImage,this._addEventListeners(this._element),this._element}}])&&t(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),e}();function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===i(o)?o:String(o)),r)}var o}var c=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=n,this._config=t,this._inputList=Array.from(this._formElement.querySelectorAll(this._config.inputSelector)),this._buttonElement=this._formElement.querySelector(this._config.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.setAttribute("disabled",!0),this._buttonElement.classList.remove(this._config.errorClass),this._buttonElement.classList.add(this._config.inactiveButtonClass)):(this._buttonElement.classList.add(this._config.errorClass),this._buttonElement.removeAttribute("disabled"),this._buttonElement.classList.remove(this._config.inactiveButtonClass))}},{key:"_showInputError",value:function(e,t){this._errorElement=this._formElement.querySelector("#".concat(e.id,"-error")),e.classList.add(this._config.inputErrorClass),this._errorElement.classList.add(this._config.spenMessageError),this._errorElement.textContent=t}},{key:"_hideInputError",value:function(e){this._errorElement=this._formElement.querySelector("#".concat(e.id,"-error")),e.classList.remove(this._config.inputErrorClass),this._errorElement.classList.remove(this._config.spenMessageError),this._errorElement.textContent=""}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e.toggleButtonState()}))})),this.toggleButtonState()}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),l=document.querySelector(".edit-form"),a=document.querySelector(".profile__edit-button"),s=document.querySelector(".block-profile__add-button"),f=document.querySelector(".window-img"),p=document.querySelector(".popup__form-input_text_name"),m=document.querySelector(".popup__form-input_text_role"),y=document.querySelector(".profile__title"),h=document.querySelector(".profile__subtitle"),b=document.querySelector(".add-form"),_=document.querySelector(".elements"),d=document.querySelector(".edit-avatar"),v=document.querySelector(".profile__edit-avatar-button"),g=document.querySelector(".delete"),S=document.querySelector(".profile__avatar"),E=document.querySelector(".popup__form-input_edit_avatar");function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==w(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}var P=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"drawElement",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==j(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}var C=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._closeButton=this._popup.querySelector(".popup__close"),this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClick=this._handleOverlayClick.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOverlayClick",value:function(e){e.target.classList.contains("popup_opened")&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",this._handleOverlayClick),this._closeButton.addEventListener("click",(function(){return e.close()}))}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==L(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},I.apply(this,arguments)}function T(e,t){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},T(e,t)}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(o){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupPicture=t._popup.querySelector(".popup__picture"),t._popupText=t._popup.querySelector(".popup__text"),t}return t=u,(n=[{key:"open",value:function(e,t){I(x(u.prototype),"open",this).call(this),this._popupPicture.src=t,this._popupPicture.alt=e,this._popupText.textContent=e}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(C);function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,M(r.key),r)}}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=N(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},A.apply(this,arguments)}function D(e,t){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},D(e,t)}function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e){return N=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},N(e)}function M(e){var t=function(e,t){if("object"!==B(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===B(t)?t:String(t)}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&D(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=N(r);if(o){var n=N(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===B(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return F(e)}(this,e)});function u(e,t){var n,r,o,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),r=F(n=i.call(this,e)),c=function(){return n._values={},n.inputList.forEach((function(e){n._values[e.name]=e.value})),n._values},(o=M(o="_getInputValues"))in r?Object.defineProperty(r,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[o]=c,n._popupForm=n._popup.querySelector(".popup__form"),n.inputList=n._popupForm.querySelectorAll(".popup__form-input"),n._submitButton=n._popup.querySelector(".popup__form-submit-button"),n._submitCallback=t,n}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;A(N(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(){"Сохранить"===e._submitButton.textContent?e._submitButton.textContent="Сохранение...":e._submitButton.textContent="Создать...",e.forInput=e._getInputValues(),e._submitCallback(e.forInput),e.close()}))}},{key:"close",value:function(){A(N(u.prototype),"close",this).call(this),this._popupForm.reset()}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(C);function z(e){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z(e)}function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==z(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==z(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===z(o)?o:String(o)),r)}var o}var H=function(){function e(t){var n=t.profileTitle,r=t.profileSubtitle,o=t.profileAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=n,this._infoElement=r,this._profileAvatar=o}var t,n;return t=e,(n=[{key:"downloadUserInfo",value:function(e){this._nameElement.textContent=e.name,this._infoElement.textContent=e.about,this._profileAvatar.src=e.avatar}},{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,about:this._infoElement.textContent,avatar:this._profileAvatar.src}}}])&&J(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function W(e){return W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W(e)}function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==W(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==W(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===W(o)?o:String(o)),r)}var o}function K(){return K="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=X(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},K.apply(this,arguments)}function Q(e,t){return Q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Q(e,t)}function X(e){return X=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},X(e)}var Y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Q(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=X(r);if(o){var n=X(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===W(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._deleteForm=n._popup.querySelector(".popup__form"),n._submitCallback=t,n}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;K(X(u.prototype),"setEventListeners",this).call(this),this._deleteForm.addEventListener("submit",(function(){e._submitCallback(e._element),e.close()}))}},{key:"close",value:function(){K(X(u.prototype),"close",this).call(this)}},{key:"open",value:function(e){K(X(u.prototype),"open",this).call(this),this._element=e}}])&&G(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(C);function Z(e){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z(e)}function $(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==Z(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==Z(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===Z(o)?o:String(o)),r)}var o}var ee,te=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"postUserInfo",value:function(e){fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.userName,about:e.userRole})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){return console.error("Произошла ошибка:",e),Promise.reject("Произошла ошибка при выполнении запроса")}))}},{key:"postUserAvatar",value:function(e){fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.linkAvatar})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){return console.error("Произошла ошибка:",e),Promise.reject("Произошла ошибка при выполнении запроса")}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:{authorization:"68ba550e-5b32-4477-ae61-93c3a6a6c328"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){return console.error("Произошла ошибка:",e),Promise.reject("Произошла ошибка при выполнении запроса")}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:"68ba550e-5b32-4477-ae61-93c3a6a6c328"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){return console.error("Произошла ошибка:",e),Promise.reject("Произошла ошибка при выполнении запроса")}))}},{key:"addCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){return console.error("Произошла ошибка:",e),Promise.reject("Произошла ошибка при выполнении запроса")}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){return console.error("Произошла ошибка:",e),Promise.reject("Произошла ошибка при выполнении запроса")}))}},{key:"likeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise("Ошибка: ".concat(e.status))})).catch((function(e){return console.error("Произошла ошибка:",e),Promise.reject("Произошла ошибка при выполнении запроса")}))}},{key:"deleteLikeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise("Ошибка: ".concat(e.status))})).catch((function(e){return console.error("Произошла ошибка:",e),Promise.reject("Произошла ошибка при выполнении запроса")}))}}])&&$(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),ne={};ee={formSelector:".popup__form",inputSelector:".popup__form-input",submitButtonSelector:".popup__form-submit-button",inactiveButtonClass:"popup__form-submit-button_disabled",inputErrorClass:"popup__input_type_error",spenMessageError:"popup__message_input-error",errorClass:"popup__form-submit-button_visible"},Array.from(document.querySelectorAll(ee.formSelector)).forEach((function(e){var t=e.id,n=new c(ee,e);n.setEventListeners(),ne[t]=n}));var re=new te({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-69",headers:{authorization:"68ba550e-5b32-4477-ae61-93c3a6a6c328","Content-Type":"application/json"}}),oe=new Y(g,(function(e){re.deleteCard(e.querySelector(".element__image").id).catch((function(t){console.log(t),e.remove()})).catch((function(e){return console.log(e)}))}));oe.setEventListeners();var ie=new R(f);ie.setEventListeners();var ue=new P({renderer:function(e){var t=function(e){var t=new o(e,_,"#element",ie,oe,re);return t.fillCard(),t}(e),n=t.fillCard();ue.addItem(n)}},".elements");re.getInitialCards().then((function(e){ue.drawElement(e)})).catch((function(e){console.log(e)}));var ce=new V(b,(function(e){var t={name:e.commentImg,link:e.linkImg};re.addCard(t).then((function(e){console.log(e)})).catch((function(e){return console.log(e)}))}));ce.setEventListeners(),re.getUserInfo().then((function(e){console.log(e),se.downloadUserInfo(e)})).catch((function(e){console.log(e)}));var le=new V(l,(function(e){re.postUserInfo(e)}));le.setEventListeners();var ae=new V(d,(function(e){re.postUserAvatar(e)}));ae.setEventListeners();var se=new H({profileTitle:y,profileSubtitle:h,profileAvatar:S});a.addEventListener("click",(function(){var e=se.getUserInfo();p.value=e.name,m.value=e.about,ne.userInfo.toggleButtonState(),le.open()})),s.addEventListener("click",(function(){ne.userImg.toggleButtonState(),ce.open()})),v.addEventListener("click",(function(){var e=se.getUserInfo();E.value=e.avatar,ne.editAvatarForm.toggleButtonState(),ae.open()}))})();