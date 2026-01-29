/**
 * * looping technique
 * 1. for loop
 * 2. while loop
 * 3. do while --> ignore
 * 4. for of --> array loop korar jonno
 * 5. for in --> object loop korar jonno
 */

const friends = ['Elon', 'Bill', 'Mark', 'Waren'];

for(const friend of friends){
    // console.log(friend);
}

for(let i = 0; i < friends?.length; i++){
    // console.log(i);
    // console.log(friends[i]);
}

for(let i = 0; i <= friends?.length; i++){
    // console.log(i);
    // console.log(friends[i]);
}


// numbers
const numbers = [23, 54, 73, 74, 75, 84, 84, 875, 5675, 854, 544, 8554];

for(let i = 0; i < numbers.length; i++){
    // console.log(numbers[i]);
}


let i = 0;
while(i < friends.length){
    console.log(friends[i]);
    i++;
}

while(i < numbers.length){
    // console.log(numbers[i]);
    i++;
}