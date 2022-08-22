 let myArray  = [ 20, 30, 2, 4, 6, 7, 8];
//  push method 
// push will add an elemnt at the end
// it will take a value
// it will return a new array if we pushed any value
// else it will return length of array
// it will change the length of an array

myArray.push(50); //one elemnt at the end
console.log(myArray);
myArray.push(60, 70, 60, 90);
console.log(myArray);

console.log(myArray.push()); //12 length of the array

// pop method do not take anything as argument
// pop method will remove the last slement of an array
// po method will return the removed items

console.log(myArray.pop());
console.log(myArray);
console.log(myArray.pop()); //returns poped element

// unshift is used to add an elemnt in the begining
// it will take an elemnt to add to the array as an elemnt
// unshift method will return the lenghth os an array
let fruits = ["apple", "grap", "mango", "orange"];
fruits.unshift("Lemon");
console.log(fruits);

// shift is used to remove an elemnt at begining
// it will not take any argument
// it will return the removed elemnts

console.log(fruits.shift());
console.log(fruits.shift());
console.log(fruits);

// concat method will join ttwo or more arrays
//it will return a joined new array
// concat method will not change your original array

let a = [20, 30, 40];
let b = [1, 2, 3];
let c = [4, 5, 6];
let res = a.concat(b, c);
console.log(res, "array");

const arr1 = [1, 2, [7, 8]];
const arr2 = [[4, 5], 6, 8, 9];
const arr3 = arr1.concat(arr2);
console.log(arr3, "nested array");


// flat
// flat method will make nested arrays as single array
console.log(arr1.flat());

// join method will convert array to string
const citys = ["banglore", "Kolar", "Tumkur", "hubli"];

let string  = citys.join(" ");
console.log(string);

// findIndex and indexof
// findIndex method will have a callback function
// pass call back function

let arrayData = [17, 19, 20, 30, 50];

function votingEligibility(age){
    return age > 18;
};

let x = arrayData.findIndex(votingEligibility);
console.log(x);

// indexOf
// the  index method will retrun the first index position of the specifies value
// indexOf method return if your array does not have the specegied valye -1
console.log(arrayData.indexOf(17));// not found
console.log(arrayData.indexOf(19));//returns from index position

console.log(typeof arrayData);
let e = 78;
console.log(Array.isArray(arrayData));//true is array method will return me booliean

// to convert string to array
let data = "heloo java script"
let arrData = data.split(" ");
console.log(arrData);

// print the words in reverse order
let lamda = "Before a good leader be a good human"
let IamArray = lamda.split(" ");//this convert string to array
let gama = IamArray.reverse();
console.log(gama);

// map();
// forEach();
//filter();

// map method takes a call back function (value,index,original array)
let reverse = "";
for(let i = IamArray.length - 1; i--;) {
    reverse += IamArray[i];
}
console.log(reverse);

IamArray.map((value,index,arr) =>{
    console.log(value, index);
});

IamArray.filter((value, index, arr) =>{
    console.log(value, "filter");
} );

let filterArr = [20, 30, 50, 60, 80, 12, 17];
// sam out put
filterArr.filter((value, ind, arr) => {
    if(value > 20){
        console.log(value);
    }
});

let filtered = filterArr.filter((value) => {
    return value + 10;
}); //no change in the output

let mapped = filterArr.map((value) => {
    return value + 10;
});//10 extra will be added to the values
console.log(filtered);
console.log(mapped);

// forEach

let hobbies = ["cricket", "Badmition", "carrom", "Cooking"];

hobbies.forEach(function(val, ind, arr) {
    console.log(`${val}-${ind}`);
});

// includes
console.log(hobbies.includes("cricket"));//true it return bollean
console.log(hobbies.includes("cri"));//false it return boolian

// find method
// find meyhod will take one callback function and it
// returns the first elemnt that match the condition
let arryFind = [30, 1, 4, 5, 9, 65, 8, 4];

const found = arryFind.find((value) => value > 10);
console.log(found);

// sort()
// it will consider the values as sring
// it will arrange an elements in an ascending or descing order
// new array with in sorted order
// it will over writes the original array

let sortArray = [15, 18, 78, 13, 23, 44, 54, 32, 99, 100]; 
sortArray.sort(); //with op



// splice method
// we splice method to add or remove the element in mid of the array
// it will affect your original array
// it returns the removed elements if any element is rmeoved
// arrayData.splice(start-index,no of elemnts to be removed,new elemnts to be added

let spliceArray = [2, 4, 7, 3, 5, 6, 8, 9, 10];


let splicedArray = spliceArray.splice(3, 2, 56, 78);
console.log(spliceArray);//
console.log(splicedArray);//splice method will rtuen the deleted elements
 
// adding element with out deleting
let noDelete = spliceArray.splice(2, 0, 25, 60);
console.log(spliceArray);
console.log(noDelete);

// slice method
// slice method will return the new array
// it will take two arguments start 0
// to delete an element in mid of the array

let sliceArray = ["CIT","SSIT","KIT","NIST","christ"]; //original copy

const data2 = sliceArray.slice(1); //ssit,ki, nist christ
const data3 = sliceArray.slice(2);//"kit nist christ"
const data4 = sliceArray.slice(2,4);//first argument is excluded and second argument is printed
const data5 = sliceArray.slice(-2);//nist,christ
const data6 = sliceArray.slice(2,-1);//

console.log(data2, "sliced array");
console.log(data3);
console.log(data4);
console.log(data5);
console.log(data6);

console.log(sliceArray, "original array");