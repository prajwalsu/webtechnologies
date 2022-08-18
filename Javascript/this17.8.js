/global level this is refers to window object
console.log(this);
console.log(window);
console.log(this == window);

const personObj = {
    firstName: "Akshata",
    lastName: "naik",
    getFullName: function () {
        console.log(this);
        return this.firstName + this.lastName;

    },
};
console.log(personObj.getFullName());


let arr = [1, 2, , 3];
let arr2 = [1, 2, 3]
console.log(arr == arr2);
console.log(arr === arr2);


console.log(null == 0);
console.log(null > 0);
console.log(null >= 0);

console.log(1 < 2 < 3);
console.log(3 > 2 > 1);