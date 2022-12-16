'use strict';

const numbers = [1, 3, 5, 4];

const isAllOdd = numbers.every((e) => e % 2);
const isSomeOdd = numbers.some((e) => e % 2);

console.log(isAllOdd, isSomeOdd); // false, true

/**
 * numbers는 홀수 3개 짝수 1개를 담고 있는 배열이다.
 * some은 하나의 조건만 만족해도 true이며,
 * every는 모든 조건이 만족해야 true이다.
 */
