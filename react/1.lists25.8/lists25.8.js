const listElement = React.createElement(
    "ul", //element
     null, //attribute
     React.createElement(
         "li", 
         {className : "car", style: { color : "pink"}}, //second argument is attribute,1st is element name,3rd is value
          "car"
          ),
     React.createElement("li", {className : "jeep", style : {color : "orange"}}, "jeep")
);

// ReactDOM.render(listElement,document.getElementById("container"))

// looping by map method

const moblies = ["one+", "apple", "samsung" ,"realme", "redmi"];
const mobileLoop = moblies.map((mobile, index) => {
    return React.createElement("li", {key :  mobile + index}, mobile); //to convert array to lists
});

const allItems = React.createElement("div", null, listElement, mobileLoop )

ReactDOM.render(allItems, document.getElementById("container"));

