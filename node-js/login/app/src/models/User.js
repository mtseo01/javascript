'use strict';
const UserStorage = require('./UserStorage');
class User {
  constructor(body) {
    this.body = body;
  }
  login() {
    const body = this.body;
    const { id, password } = UserStorage.getUserInfo(body.id);
    if (id) {
      if (id === body.id && password === body.password) {
        return { success: true };
      }
      return { sucess: false, msg: 'invaild password. try again.' };
    }
    return { success: false, msg: 'invaild ID. try again.' };
  }
}

module.exports = User;
