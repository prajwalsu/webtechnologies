// jsx
// javascript xml
// looks similar to html but it's jsx
console.log("started");
const element = <h1>Hello World</h1>//jsx way of creating an element
console.log(element);


const names = "Nuthana";
const h1Element = <h1>hello {names}</h1> //hello nuthana

const mobiles = ["oneplus", "apple", "samsung", "realme","redmi"];

const loopData = mobiles.map((value) => {
    return <h1>{value}</h1>;//React.createEleement("p", null)
});

const ulElement = (
    <ul>
        {mobiles.map((value) => {
            return <li>{value}</li>
        })}
    </ul>
);

const allItems = React.createElement(
    "div",
    null,
    loopData,
    ulElement,
    h1Element
);

ReactDOM.render(allItems, document.getElementById("container"));