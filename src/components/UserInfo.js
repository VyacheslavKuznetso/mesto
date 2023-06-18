export default class UserInfo  {
    constructor({ profileTitle, profileSubtitle }) {
        this._nameElement = profileTitle;
        this._infoElement = profileSubtitle;
    }

    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            info: this._infoElement.textContent
        };
    }

    setUserInfo({ forInput }) {
        this._nameElement.textContent = forInput.userName;
        this._infoElement.textContent = forInput.userRole;
    }
}