// ...magical points

// rest paramete
// it will allow us to add varing argumrnts to function

function add( ...a) {
    let sum = 0;
    for(let i of a) {
        sum = sum + i;
    }
    console.log(sum);
    return sum;
}

add(20, 30);
add(10, 2, 3,4);
add(1, 2, 3, 4, 5,6, 7, 8, 9, 10,);

// premitive type copies by value
let x = 30;
let y = x + 10;
console.log(y); //40
console.log(x); //30

// refernce types are copied by reference
let m = {
    name : "avi",
    phnumber : 345612,
    age : 22,
};

//spread operator
let n = { ...m};
m.name = "vibhav";
n.age = 25;
console.log(n); //name:"avi" , phno:4561, gage:25
console.log(m); //name:"vaibhav", phno:45612, age:22

let person = {
    fName: "Nayana",
    lName: "S R",

    moreDetails: {
        bloodGroup : "A+",
        gender : "female",
    },
    dob : "5th jan",
}

let personCopy = { ...person}; //shalow copy will only the first layer
person.fName = "Nuthan";

person.moreDetails.bloodGroup = "AB+";
console.log(person);//fname:"nuthana" bloodgroup:"AB+"
console.log(personCopy); //fname:"nayana" bloodGroup : "A+"

// deep copy
let deepCopy = { ...person, moreDetails: { ...person.moreDetails } };

person.moreDetails.blodGroup = "AB+";
console.log(person); //fname:"nuthana" blodgroup:AB+
console.log(personCopy); //fname:"nayana" blod A+