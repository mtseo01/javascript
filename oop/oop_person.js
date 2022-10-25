'use strict';

// define class
class Person {
  // initialize
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // prototype method
  sayHello() {
    console.log(`Hello, My name is ${this.name}.`);
  }

  // static method
  static sayHi() {
    console.log('Hi!');
  }
}

// instance
const tim = new Person('Tim', 29);

// 프로토타입 메소드는 인스턴스로 호출.
tim.sayHello(); // Hello, My name is Tim.

console.log(tim.age); // 29

// 정적 메소드는 클래스로 호출. 인스턴스 생성하지 않아도 호출할 수 있음.
Person.sayHi(); // Hi!
