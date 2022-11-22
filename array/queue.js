'use strict';

// FIFO (First In First Out)

class Queue {
  #array;
  constructor(array = []) {
    if (!Array.isArray(array)) {
      throw new TypeError(`${array} is not an array.`);
    }
    this.#array = array;
  }

  enqueue(value) {
    return this.#array.push(value);
  }

  dequeue() {
    return this.#array.shift();
  }

  entries() {
    return [...this.#array];
  }
}

const queue = new Queue([1, 2]);
console.log(queue.entries()); // [1, 2]

queue.enqueue(4);
console.log(queue.entries()); // [1, 2, 4]

queue.dequeue();
console.log(queue.entries()); // [2, 4]
