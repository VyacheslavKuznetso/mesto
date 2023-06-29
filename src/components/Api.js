export class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
      }

    postUserInfo(forInput) {
        fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: forInput.userName,
                about: forInput.userRole
            })
        })
         .then((res) => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
         })
         .catch((error) => {
            console.error('Произошла ошибка:', error);
            return Promise.reject('Произошла ошибка при выполнении запроса');
         });
    }

    postUserAvatar(forInput) {
        fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: forInput.linkAvatar
            })
        })
         .then((res) => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
         })
         .catch((error) => {
            console.error('Произошла ошибка:', error);
            return Promise.reject('Произошла ошибка при выполнении запроса');
         });
    }
 
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                authorization: '68ba550e-5b32-4477-ae61-93c3a6a6c328'
            }
        })
         .then((res) => {
            if(res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`);
         })
         .catch((error) => {
            console.error('Произошла ошибка:', error);
            return Promise.reject('Произошла ошибка при выполнении запроса');
         });
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: {
                authorization: '68ba550e-5b32-4477-ae61-93c3a6a6c328'
            }
        })
         .then((res) => {
            if(res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`);
         })
         .catch((error) => {
            console.error('Произошла ошибка:', error);
            return Promise.reject('Произошла ошибка при выполнении запроса');
         });
    }

    addCard(values) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: values.name,
                link: values.link
            })
        })
         .then((res) => {
            if(res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`);
         })
         .catch((error) => {
            console.error('Произошла ошибка:', error);
            return Promise.reject('Произошла ошибка при выполнении запроса');
         });
    }


    deleteCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}`, {
            method: 'DELETE',
            headers: this._headers
        })
         .then((res) => {
            if(res.ok) {
                return res.json()
            }

            return Promise.reject(`Ошибка: ${res.status}`)
         })
         .catch((error) => {
            console.error('Произошла ошибка:', error);
            return Promise.reject('Произошла ошибка при выполнении запроса');
         });
    }

    likeCard(id) {
        return fetch(`${this._baseUrl}/cards/likes/${id}`, {
            method: 'PUT',
            headers: this._headers
        })
         .then((res) => {
            if(res.ok) {
                return res.json()
            }
            return Promise(`Ошибка: ${res.status}`)
         })
         .catch((error) => {
            console.error('Произошла ошибка:', error);
            return Promise.reject('Произошла ошибка при выполнении запроса');
         });
    }        
    
    deleteLikeCard(id) {
        return fetch(`${this._baseUrl}/cards/likes/${id}`, {
            method: 'DELETE',
            headers: this._headers
        })
         .then((res) => {
            if(res.ok) {
                return res.json()
            }
            return Promise(`Ошибка: ${res.status}`)
         })
         .catch((error) => {
            console.error('Произошла ошибка:', error);
            return Promise.reject('Произошла ошибка при выполнении запроса');
         });
    }
}