const getBtn = document.getElementById('get-button');
const tdBody = document.getElementById('tb-body');

const postBtn = document.getElementById('post-button');
const putBtn = document.getElementById('put-button');
const deleteBtn = document.getElementById('delete-button');

function getData() {
  fetch(' http://localhost:3000/databases')
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      const h = [];
      json.forEach((data) => {
        h.push(`<tr>`);
        h.push(`<td>${data.id}</td>`);
        h.push(`<td>${data.title}</td>`);
        h.push(`<td>${data.author}</td>`);
        h.push(`</tr>`);
      });
      // for (const data of json) {
      //   h.push(`<tr>`);
      //   h.push(`<td>${data.id}</td>`);
      //   h.push(`<td>${data.title}</td>`);
      //   h.push(`<td>${data.author}</td>`);
      //   h.push(`</tr>`);
      // }

      tdBody.innerHTML = h.join('');
    })
    .catch((e) => {
      console.log(e);
    });
}

function postData() {
  const data = {
    id: 6,
    title: 'About Node.js',
    author: 'Seo',
  };
  fetch('http://localhost:3000/databases', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
}

function putData() {
  const data = {
    title: 'About Network',
    author: 'Seo',
  };
  fetch('http://localhost:3000/databases/6', {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
}

function deleteData() {
  fetch('http://localhost:3000/databases/6', {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
}

deleteBtn.addEventListener('click', deleteData);
putBtn.addEventListener('click', putData);
postBtn.addEventListener('click', postData);
getBtn.addEventListener('click', getData);
