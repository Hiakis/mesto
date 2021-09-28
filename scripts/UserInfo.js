export class UserInfo {
  constructor(userSelectors) {
    this._userName = document.querySelector(userSelectors.name)
    this._userInfo = document.querySelector(userSelectors.info)
  }

  setUserInfo(data) {
    this._userName.textContent = data.name
    this._userInfo.textContent = data.info
  }

}