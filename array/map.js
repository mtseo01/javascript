'use strict';

const array = [1, 2, 3];

const result = array.map((item) => {
  return item * 2;
});
console.log(result); // [2, 4, 6]

// map 메서드 역시 원본 배열을 수정하지 않는다.
console.log(array); // [1, 2, 3]
