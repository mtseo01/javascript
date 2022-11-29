'use strict';

[1, 2, 3].forEach((value, index, arr) => {
  console.log(`value: ${value}, index: ${index}, this: ${JSON.stringify(arr)}`);
});
/*
value: 1, index: 0, this: [1,2,3]
value: 2, index: 1, this: [1,2,3]
value: 3, index: 1, this: [1,2,3]
*/

const numbers = [1, 2, 3];

// forEach 메서드는 원본 배열을 변경하지 않지만 콜백 함수를 통해 원본 배열을 변경할 수는 있다.
// 콜백 함수의 세 번째 매개변수는 원본 배열 numbers를 가리킨다.

numbers.forEach((value, index, arr) => {
  arr[index] = value ** 2;
});

console.log(numbers); // [1 , 4, 9]

class Numbers {
  numberArray = [];

  multiply(arr) {
    arr.forEach((item) => {
      this.numberArray.push(item * item);
    });
  }
}

const array = new Numbers();
array.multiply([1, 2, 3]);
console.log(array.numberArray); // [1, 4, 9]

class Calculator {
  constructor(arr = []) {
    this.arr = arr;
  }

  pow() {
    this.arr.forEach((item, index, array) => {
      array[index] = item ** 2;
    });
  }
}

const calculator = new Calculator([3, 6, 9]);
calculator.pow();
console.log(calculator.arr); // [9, 36, 81]
