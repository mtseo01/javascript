'use strict';

// const { application, json } = require('express');

const id = document.getElementById('id');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const loginBtn = document.getElementById('register-btn');

loginBtn.addEventListener('click', register);
function register() {
  const req = {
    id: id.value,
    name: name.value,
    password: password.value,
  };
  console.log(req);
  fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = '/login';
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error('register error!');
    });
}
