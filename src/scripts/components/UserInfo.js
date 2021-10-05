export class UserInfo {
  constructor({nameSelector, aboutSelector}) {
    this._userName = document.querySelector(nameSelector)
    this._userAbout = document.querySelector(aboutSelector)
  }

  setUserInfo({name, about}) {
    this._userName.textContent = name;
    this._userAbout.textContent = about;
  }
  getUserInfo() {
    return {
      name: this._userName.textContent,
      about: this._userAbout.textContent,
    };
  }

}