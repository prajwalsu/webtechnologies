// data object
// starts from zero, sunday = 0
// to local data stream

const systemDate = new Date();
// to get system
console.log(systemDate);
console.log(systemDate.getDay()); //2
console.log(systemDate.getMonth());//7
console.log(systemDate.getTime()); //it will return in milli seconds
console.log(systemDate.getFullYear());
console.log(systemDate.getMinutes());

const dateString = new Date("Dec/21/2021");
console.log(dateString);
console.log(dateString.getDay());

"tuesday"/08/2022;

const date1 = new Date ("dec/22/2021");
let month = date1.getMonth();
console.log(month);
let dateValue = date1.getDate();
console.log(dateValue);
let year = date1.getFullYear();
console.log(year);

const fullyear = `${month + 1}/${dateValue}/${year}`;
console.log(fullyear);

// Tuesday/Agust/2022;
const fullDate = systemDate.toLocaleDateString("kan-in",{
    weekday:"long",
    month :"long",
    year:"numeric",
    day:"2-digit"
});
console.log(fullDate);

// looping for loop
let person=["Avi", 90,"30/july/2000"];

for(let i = 0; i < person.length; i++)
{
    console.log(person[i]);
}