// String Methods

var str = "Test yantra";
str.toUpperCase();
console.log(str); //Test yantra:string is imuutable

var str="Test yantra";
var upper = str.toUpperCase();
console.log(upper);//TEST YANTRA

var greet = "good Morning"
var greet = greet.toLowerCase();
console.log(greet); //we can give same var name 

console.log(greet.charAt(5)); //this method will index number and return the charcter in that position

// find indexOf
console.log(greet.indexOf("o")); //1

// includes
var wishing = "Good Afternoon";
console.log(wishing.includes("noon")); //case sensitve "Good" not "good"

// replace
console.log(wishing.replace("Afternoon","Morning"));
console.log(wishing); //Afternoon

// sub string
// 01234567890
var data = "Welcome to Javascript world";
const substr =data.substr(9,5); //9 is start index, 5 num of charters to display
console.log(substr);//0 jav

// sub string
var substring = data.substring(9,4); //4 will exclude
console.log(substring); 

// to trim white spaces
var email="        megha@gmail.com          ";
console.log(email);
console.log(email.trim());