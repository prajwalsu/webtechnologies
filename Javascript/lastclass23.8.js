console.log("start");
10 === 10 ? console.log("equal") : console.log("not equal");

//console.log()() the above code ids look like this
//()() this is function currying

function test() {
    function inner() {
        console.log("inner function");
    }
    return inner;
}
test()();//this is called curying

//closure is a previlage for a inner function to access outer function

function outer() {
    let count = 0;
    function inner() {
        count = count + 1;
        console.log(count);
    }
    return inner;
}
outer()();