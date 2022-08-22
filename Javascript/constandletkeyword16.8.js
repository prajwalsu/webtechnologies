// debugger;
console.log(student); //akshata

var student = "akshata";
var student =34;
console.log(student); //akshata

// to avoid these conflicts we have let and const key words
// are introduced in ES6

var d;
console.log(a);//undefined
console.log(b);//undefined
console.log(c);//undefined
console.log(d);
var a=10;
var b=20;
var c=30;
console.log(a);//10
console.log(b);//20
console.log(c);//30

// let and const
// console.log(sec); //undefined

// temporsl dead zone is a time between variable declaration and variable initialized
// you can not access the variable until they are assigned with vaule
let sec ="b";

// console.log(number2);
const number2 =56;
let x =10;
console.log(x);
// let x =20;//redeclaring of variables is not possible if it is let keyword but re-iniTILIZAtion is possib;e

let m=20;
x=m;
console.log(x);

// if it is const keyword re-declaration and re - initilization is not possible
const y=50;

console.log(y);
// y=m;
console.log(y);

// console.log(num);//error
// const num = 20;

const num = 30;
let num2 = 20;

num = num2;//re-initialization
console.log(num2);


