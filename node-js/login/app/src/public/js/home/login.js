'use strict';

const id = document.getElementById('id');
const password = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', login);
function login() {
  const req = {
    id: id.value,
    password: password.value,
  };

  console.log(req);
}
