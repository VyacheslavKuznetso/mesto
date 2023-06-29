export default class UserInfo  {
    constructor({ profileTitle, profileSubtitle, profileAvatar }) {
        this._nameElement = profileTitle;
        this._infoElement = profileSubtitle;
        this._profileAvatar = profileAvatar;
    }

    downloadUserInfo(info) {
        this._nameElement.textContent = info.name;
        this._infoElement.textContent = info.about;
        this._profileAvatar.src = info.avatar;
    }

    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            about: this._infoElement.textContent,
            avatar: this._profileAvatar.src
        };
    }




}