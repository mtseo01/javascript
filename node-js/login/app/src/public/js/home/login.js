'use strict';

// const { application, json } = require('express');

const id = document.getElementById('id');
const password = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', login);
function login() {
  const req = {
    id: id.value,
    password: password.value,
  };
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {});
}
