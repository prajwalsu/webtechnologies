

console.log(typeof NAN); //number
// named function
// named function synaax

// function funName(parameters)
//  {statement}

function add(a, b){
    return a + b;
} //function declaration

add(2, 7); //function call

// anaonums function

// synatx
// let x = fuunction(){ 
    // sttatements
//}
let addAnoni = function (a) {
    return a * a; 
}; //function expression
 
let x = addAnoni(3); //9
console.log(x);

// Arrow functions it is a ES6 feature
// arrow dont have fun keyword,name,arguments
let ArrowFun=(arguments)=>{
    //   statements
}
ArrowFun()

// imeditely invoked functions
// (function (arguments){
//     // statemts
// }
// )();

function addition(a,b) {
    let sum = a + b;
    console.log(`sum of ${a} and ${b}`, sum);
}
addition(4, 5); //values
addition(3, 5);
addition(6, 8);

// passing a function as an argument
function findIsEligibleForVoting (age) {
    if(age >= 18){
        return true;
    }else{
        return false;
    }
}

let result = findIsEligibleForVoting(21);

function printEligibleOrNot(arg){
    if ( arg === true) {
        console.log("eligible for voting");
    } else {
        console.log("not eligible foe voting");
    }
}

printEligibleOrNot(result);

// immeditely invoked function
(function substraction(a, b) {
    let sum = a  - b;
    console.log(sum);
})(5, 3);


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