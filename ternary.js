/**
 * Ternary --> three parts
 */ 

const age = 20;

// if(age >= 18){
//     console.log('You can vote.');
// }else{
//     console.log('Dont allows');
// }


// simple ternary
// age >= 18 ? console.log('You can vote.') : console.log('Dont allows');

let price = 5000;
const isLeader = true;

// if(isLeader === true){
//     price = 0;
// }else{
//     price = price + 100;
// }

// console.log(price);

// if(isLeader === true){
//     if(price > 1000){
//         price = price / 2;
//     }else{
//         price = 0;
//     }
// }else{
//     price = price;
// }

// console.log(price);

// ternary conditions
price = isLeader === true ? price > 1000 ? price / 2: 0 : price + 100;

console.log(price);