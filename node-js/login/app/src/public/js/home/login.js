'use strict';

const id = document.getElementById('id');
const password = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', login);
function login() {
  if (!id.value) return alert('Please, Enter your ID.');
  if (!password.value) return alert('Please, Enter your Password.');

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
    .then((res) => {
      if (res.success) {
        location.href = '/';
      } else {
        if (res.err) return alert(res.err);
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error('login error!');
    });
}
