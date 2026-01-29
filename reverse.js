const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers array reverse
// const reversed = numbers.reverse();
// console.log(numbers);
// console.log(reversed);


const rev_numbers = [];

for(const num of numbers){
    // console.log(num);
    // rev_numbers.unshift(num);
}

for(let i = 0; i < numbers.length; i++){
    // const num = numbers[i];
    // rev_numbers.unshift(num);
}

for(let i = numbers?.length -1; i >= 0 ; i--){
    const num = numbers[i];
    console.log(num);
    rev_numbers.unshift(num);
}


console.log(rev_numbers);