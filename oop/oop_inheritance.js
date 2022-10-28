'use strict';

// 객체지향프로그래밍 특징
// 캡슐화
// 상속
// 다향성 (overriding)

class Parent {
  constructor(firstName, age, sex = 'unicorn') {
    this.lastName = 'Kim';
    this.firstName = firstName;
    this.age = age;
    this.sex = sex;
  }

  sayHello() {
    console.log('Hello from Parent');
  }

  sayFullName() {
    console.log(`My name is ${this.lastName} ${this.firstName}.`);
  }
}

// inheritance
class Child extends Parent {
  // method overriding
  sayHello() {
    console.log('Hello from Child');
  }
}

const father = new Parent('James', 40, 'Male');
father.sayFullName(); // My name is Kim James.
father.sayHello(); // Hello from Parent
console.log(father.sex); // Male

const kid = new Child('Mike', 10);
kid.sayFullName(); // My name is Kim Mike
kid.sayHello(); // Hello from Child

// default parameter
console.log(kid.sex); // unicorn
