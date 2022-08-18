// Math object
// min method will accept the list of value as argument and
// retyrns the minimum value amomng the list of values

let minNumber = Math.min(12, 20, 1, 3, 8, 4, 100, 1, 89);
console.log(minNumber);

let maxNumber = Math.max(2, 8 ,13, 55, 99,77,80);
console.log(maxNumber);

// to find the power
let powOfNumber  = Math.pow(2, 3);
console.log(powOfNumber);

// floor
let floreValue = Math.floor(20.1);
console.log(floreValue); //bottom value

let ceilValue = Math.ceil(20.4);
console.log(ceilValue); //top value

 
// random method
let randomValue = Math.random();
console.log(randomValue);

let names = [
    "Avi",
    "Akshata",
    "Namamna",
    "Nayana",
    "Nuthana",
    "Prajwal",
    "Vibav",
    "Himagirish"
]

let randomIndex = Math.floor(Math.random(names) * names.length);
console.log(names[randomIndex]);
