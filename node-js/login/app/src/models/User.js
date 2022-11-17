'use strict';
const UserStorage = require('./UserStorage');
class User {
  constructor(body) {
    this.body = body;
  }
  login() {
    const client = this.body;
    const { id, password } = UserStorage.getUserInfo(client.id);
    if (id) {
      if (id === client.id && password === client.password) {
        return { success: true };
      }
      return { sucess: false, msg: 'invaild password. try again.' };
    }
    return { success: false, msg: 'invaild ID. try again.' };
  }

  register() {
    const client = this.body;
    const response = UserStorage.save(client);
    return response;
  }
}

module.exports = User;
