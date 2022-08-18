console.log("out side the function a", a); //undefined
var a = 20;
var b = 30;

console.log(" out side the function b, b"); //30

// variable hoisting inside the function
function test() {
    console.log("b inside the function", b); //undefined
    var b = 10; //inside the function local variable will get more preority
    console.log("a in side the function", a); //20
    console.log(b);
}
test();
// local variables have mor priority than global

// hoisting : hoisting is a technique which moves variables
// and function declaration to the top of there scope before
// code execution begins    

// function hhisting is possible only for named functiond
add(2, 4);

var name = "megha";

function add(a, b) { 
    console.log(a + b);
}

greet(); //in this case it beaves like variable hoisting

var greet = function() {
    console.log("Good morning");
};

