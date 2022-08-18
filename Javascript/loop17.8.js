// for loop
// does not work with objects
// does not work ignore empty elemnts
// break statements is not supported
let arr = [20, "megha", " ", , 78, ,69, 90];

for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}

// for of loop
// does not work with objects
// does not work ignore empty elemnts
// break statements is not supported

for(let value of arr) {
    console.log(value);
}

// 2
let students=["avi","akshata","namana","nayana","nuthana","prajwal","vaibav","himagirish"];
 
// for(let j = 0; j<students.length; j++){
//     console.log(students[j]);
// }

for( let j of students){
    console.log(j);
}

// 3
let pens=[
    {
        brand:"renolt",
        color:"pink",
        price:3,
        type:"gel",
    },
    {
        brand:"parker",
        color:"black",
        price:500,
        type:"ballpoint",
    },
    {
        brand:"cello",
        color:"blue",
        price:3,
        type:"ballpoint",
    },
    {
        brand:"bright",
        color:"orange",
        price:30,
        type:"gel",
    },

]

// print the pens ehos price >5rs
// for

for(let  i = 0; i < pens.length; i++){
    if (pens[i].price<5) {
        console.log(pens[i]);
        
    }
}

// for
for (let i of pens) {
    if(i.price>5){
        console.log(i);
    }
}

// type ball point,price>5

for (let i of pens) {
    if(i.price>5 && i.type=="ballpoint"){
        console.log(i);
    }
    
}

// && logical and
// || logical or
//  ! not

// for in loop

// works with object as well arrays
// ignore empty elements
// it does not ignore extra properties which dont have index

let person={
    firstname:"megha",
    lastname:"gowda",
    gender:"female",
    pnNumber:123456
};

for(let key in person){
    console.log(`${key}-${person[key]}`);
}

// for arr its values, for obj its key
for (let value in pens){
    if (pens[value].type==="ballpoint" && pens[value].price>5) {
        console.log(pens[value]);
    }
}

// this will ignore empty places
for(let value in arr){
    console.log("this from for inloop",arr[value]);
}