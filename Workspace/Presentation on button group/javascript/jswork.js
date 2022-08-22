// //                                         //constKeyword and letKeyword,16/8
// // // debugger;
// //  console.log(student); //undefined no error

// // var student = "praju"

// // var student1 = "praju"
// // var student1 = "51"
// // console.log(student1); //return second intilization
// // //confusion occured, so let and cont r used

// //                                     //   let and const

// // console.log(a); //undefined
// // console.log(b); //undefined
// // console.log(c);// c is not defined
// //  var a = 1;
// //  var b = 2;
// //  var c = 3;

// //                                 //   letKeyword
// // re declaration(x= 10, x=5) not possible using let but re -initlizatio (x=m)is not  possible using let
// let x = 10;
// console.log(x);
// // let x = 11; //x' has already been declared, without let we can change
// // console.log(x);

// let p = 1;
// console.log(p);
// // let p = q; //p' has already been declared, without let we can change
// // console.log(q);


// // let e = 3;
// // console.log(e);
// // let f = e;
// // console.log(f);

// // const i = 6;
// // console.log(i);
// // const i = 9;
// // console.log(i);


// //                         //    operators,16/8
// // //incrementation
// // let l = 20;
// // console.log(l); //20

// // let m = l++;
// // console.log(m); //20

// // let o = ++l;
// // console.log(o); //22

// // // comparison operators
// // let num = 30;
// // let num2 = "30";
// // console.log(num == num2); //compare only values
// // console.log(num === num2 ); // compare both values and data types

// // let j = 10;
// // let k = "10";

// // console.log(j < k);//false
// // console.log(j !== k);//true
// // console.log(j === k); //false

//                         // Turnery operator
// // let marks = 20;
// // console.log(marks =20 ? "pass": "fail");

// // //object using new object
// // var object = new Object;
// // object.name = "praju"
// // object.usn = 51
// // console.log(object);

// // // no new object
// // var object={name :"praju",usn : 51};
// // console.log(object);



// ///////////////////////////////////////////////////////////////////////////////////////////////////////////

//                                         // DATE

// // To get system date

// const systemDate = new Date();
// console.log(systemDate);

// // To create our own date

// const ownDate = new Date(1/2/2022); //new Date is must
// console.log(ownDate);

// console.log(ownDate.getDate());
// console.log(ownDate.getMonth());
// console.log(ownDate.getDay());
// console.log(ownDate.getFullYear());

// // own date
// const dateStr= new Date("Dec/21/2021");
// console.log(dateStr);
// console.log(dateStr.getDay());
// console.log(dateStr.getMonth());

// //to get output using keyeord
// const date1 = new Date("dec/22/2022");
// let month = date1.getMonth();
// console.log(month);
// let dateValue = date1.getDate();
// console.log(dateValue);
// let year = date1.getFullYear();
// console.log(year);

// // to change the existing date
// const fullyear = `${month}/${dateValue}/${year}`;
// console.log(fullyear);

// // to get date whichh is inside the array
// const Avisdata = ["avi", 90, "1/1/2000"];

// for (let i = 0; i < Avisdata.length; i++) {

//     console.log(Avisdata[i]);
    
// };                                          

// /////////////////////////////////////////////////////////////////////////////////////////////////////////

//                         //const and let keyeord

// // let keyword : can re-initiliaze can't re-declarae
// // const keyword : can not do anything

// let hero   = "Vikram";
// let villan = "vedha";

// console.log(hero);
// console.log(villan);

// villan = hero;

// console.log(hero);
// console.log(villan);

// // let hero = "nambi";
// // console.log(hero); //re-declaration not possible

// const ghost = "Kamal";
// const dealer = "doctor";

// console.log(ghost);
// console.log(dealer);

// // ghost = dealer;
//                           //re -initilization and re - declaration not possible

// // console.log(ghost);
// // console.log(dealer);

//////////////////////////////////////////////////////////////////////////////////////////////////

                                    // Objects

//   Two types
//1> with new object
//2> eithout new Object

// with new Object 

var newObj = new Object();
newObj.name = "vikram", //no :, only = to assign values
newObj.post = "troop Commander",
newObj.skill = "Leader",
console.log(newObj);

// with out new Object
var withOutNewObject = {name : "tena", post : "Pshcology", skill : "deadly fighter"}; //no =, only : to assign values
console.log(withOutNewObject);

