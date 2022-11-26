'use strict';

const numbers = [40, 100, 1, 5, 2, 25, 10];

// asc
numbers.sort((a, b) => a - b);

console.log(numbers); // [1, 2, 5, 10, 25, 40, 100]

// maximum , minimum value
console.log(numbers[0], numbers[numbers.length - 1]); // 1 100

// desc
numbers.sort((a, b) => b - a);

console.log(numbers); // [100, 40, 25, 10, 5, 2, 1]

const todos = [
  { id: 3, content: 'JavaScript' },
  { id: 1, content: 'HTML' },
  { id: 2, content: 'CSS' },
];

function compare(key) {
  return (a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);
}

// id 기준 오름차순 정렬
todos.sort(compare('id'));
console.log(todos);
/*
[
  { id: 1, content: 'HTML' },
  { id: 2, content: 'CSS' },
  { id: 3, content: 'JavaScript' }
]
*/

// content 기준 오름차순 정렬
todos.sort(compare('content'));
console.log(todos);
/*
[
  { id: 2, content: 'CSS' },
  { id: 1, content: 'HTML' },
  { id: 3, content: 'JavaScript' }
]
*/
