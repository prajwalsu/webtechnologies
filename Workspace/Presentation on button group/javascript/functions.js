// named function
function add(a , b){
    return a + b;
}
console.log(add(2, 3)); //5

   //function expression
// anonymous fuction
let cross = function (number){
    return number * number
};
let x = cross(5);
console.log(x); //25


        // Arrow function
// no function keyword,name
let fruits = ["mango","strawberry","chiku"];
console.log(fruits.map(fruits=>fruits.length)); //[5, 10, 5]

// when u have a single line in ur function
// body no need of curly braces
let product = (a) => a * a;
console.log(product(4));

// if you have only one argument No
// need of parenthsis and curly braces
let square = b => b * b;
square();

// if we dont have parameter then parentsis is mandtory
let names = () => console.log("data is safe in arrow function");
names();

        // immediate function
// syntax
(function funname (a,b){
    let sub = a - b;
    console.log(sub);
})(5-2);

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1,0,  'Feb');
// // inserts at index 1
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May');
// replaces 1 element at index 4
// console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]



