console.log(30+30); //arthematic operator
console.log(20-30);
let a = 20;
let b = a++;
let c = ++a; //the increment operator increments and return thr value before increment
// let c =++a; //it increments the value and return the incremented value
console.log(b);
console.log(a);
console.log(c);

// comparision operators
        
// >=,<=,=,>,<,!=,==

// == and ===

let num = 10;
let num2 = "10";
console.log(num == num2); //true because it will check only the value
console.log(num === num2); //false because it will check along with the data type

let str = "true";
let str1 = "true";

let num3 = 20;
let num4 = "20";
console.log(num3 == num4, "this is boolean" );

let x = 40;
let y = "40";

console.log(x < y, "thsi is greater than operator");

console.log(x !== y);//true
console.log(x === y);//true

// turnery operator
 let age = 12;
 console.log(age >=18 ? "eligible for voting and dating" : "not eligible");
//  true :1st one will appear if not second one

// write ap rogram to check weather the given vaue charcter vowel or not
// write a program to display marks is grater than 80 print distinction greater 70 first class  greater 35 second class  lesser than 35 fail

let marks = 60;
console.log(marks>80? "distiction":marks>70? "first class":marks>35?"second class":"fail");

// let name = "a";
// console.log(name==a,e,i,o,u? "vowels" : "not a vowel");

//  new object's O should be uppercase
// using new object
var object=new Object
object.name="Akshata"
object.address="Mangalore"
object.age=22
object.phno=9164559711
object.designation="Trainee Enginner"
console.log(object);

var obj={
    name:"Akshata",
    address:"Mangalore",
    age:22,
    phno:9164559711,
    designation:"Trainee Enginner"
};
console.log(obj);