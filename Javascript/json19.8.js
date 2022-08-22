// json java script object notation

let person = {
    name = "megha",
    ph : 45612,
    sal : 700000,
};

const jsonObje = JSON.stringify(person);
// it will convert ja to json objects
console.log(jsonObje);

const javascriptObj = JSON.parse(jsonObje);
console.log(javascrriptObj);
// json.parse() will sonvert json objects to java script objects