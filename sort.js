const persons = ['rakib', 'nokib', 'sakib', 'akib', 'dakib'];
const sortedPersons = persons.sort();
// persons.reverse();
// console.log(persons);

// sort
// const numbers = [4, 7, 2, 8, 3, 6];
/**
 * ascending --> smaller to larger: [2, 3, 4, 6, 7, 8];
 * decending --> larger to smaller: [8, 7, 6, 4, 3, 2];
*/

const numbers = [4, 7, 2, 8, 43, 6, 1];

// const numbers_asc = numbers.sort();
const numbers_asc = [...numbers].sort(function (a, b) {return a - b});
const numbers_dec = [...numbers].sort(function (a, b) {return b - a});
console.log(numbers_asc);
console.log(numbers_dec);