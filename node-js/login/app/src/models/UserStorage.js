'use strict';

class UserStorage {
  static #users = {
    id: ['mt', 'kim', 'seo'],
    password: ['123', '333', 'mt'],
    name: ['jake', 'chi', 'mintaek'],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
