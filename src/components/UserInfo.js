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
        this._userData = info._id
    }

    setUserInfo(inform) {
        this._nameElement.textContent = inform.name;
        this._infoElement.textContent = inform.about;
    }

    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            about: this._infoElement.textContent,
            avatar: this._profileAvatar.src,
            userData:  this._userData
        };
    }




}