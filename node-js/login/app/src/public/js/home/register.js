'use strict';

const id = document.getElementById('id');
const name = document.getElementById('name');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const loginBtn = document.getElementById('register-btn');

loginBtn.addEventListener('click', register);
function register() {
  if (!id.value) return alert('please, write ID.');
  if (password.value !== confirmPassword.value)
    return alert('password does not match. ');

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
