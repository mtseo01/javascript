// define class
class Person {
  // initialize
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, My name is ${this.name}.`);
  }
}

// instance
const tim = new Person('Tim', 29);
tim.sayHello();
console.log(tim.age);
