'use strict';

const userList = [
  { name: 'Kim', age: 13 },
  { name: 'Choi', age: 28 },
  { name: 'Seo', age: 30 },
  { name: 'Cha', age: 7 },
  { name: 'Do', age: 31 },
  { name: 'Hwang', age: 31 },
];

let result = userList.reduce((pre, cur) => {
  if (cur.age >= 18) {
    pre.push(cur.name);
  }
  return pre;
}, []);

console.log(result); // ['Choi', 'Seo', 'Do', 'Hwang']
