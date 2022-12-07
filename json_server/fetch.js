// 버튼 엘리먼트
const getBtn = document.getElementById('get-button');
const postBtn = document.getElementById('post-button');
const putBtn = document.getElementById('put-button');
const deleteBtn = document.getElementById('delete-button');

// tbody 엘리먼트
const tdBody = document.getElementById('tb-body');

// 조회 기능(GET)
function getData() {
  fetch(' http://localhost:3000/databases') // fetch로 해당 url에 데이터 요청
    .then((response) => response.json()) // 응답 받은 데이터를 form을 json으로 변경
    .then((json) => {
      const temp = []; // 데이터를 넣을 임시 배열 생성
      json.forEach((data) => {
        temp.push(`<tr>`);
        temp.push(`<td>${data.id}</td>`);
        temp.push(`<td>${data.title}</td>`);
        temp.push(`<td>${data.author}</td>`);
        temp.push(`</tr>`);
      });

      tdBody.innerHTML = temp.join(''); // temp배열의 '원소'들을 하나로 연결하여 tdBody에 html로 입력
    });
}

// 생성 기능(POST)
function postData() {
  // 생성할 데이터 작성
  const data = {
    id: 6,
    title: 'About Node.js',
    author: 'Seo',
  };
  fetch('http://localhost:3000/databases', {
    // 옵션을 입력
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

// 수정 기능(PUT)
function putData() {
  // 수정하고 싶은 내용
  const data = {
    title: 'About Network',
    author: 'Seo',
  };
  // 수정하고 싶은 데이터의 id를 url에 입력
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

// 삭제 기능(DELETE)
function deleteData() {
  // 삭제하고 싶은 데이터의 id를 url에 입력
  fetch('http://localhost:3000/databases/6', {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
}

// 이벤트리스너
deleteBtn.addEventListener('click', deleteData);
putBtn.addEventListener('click', putData);
postBtn.addEventListener('click', postData);
getBtn.addEventListener('click', getData);
