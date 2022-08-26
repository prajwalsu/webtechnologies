//                                             //  creating list and array(looping through map method)

// // every value in the list is string
// // coponent name is not string
// const List = React.createElement(
//     "ul",
//     null,
//     React.createElement(
//         "li",
//         {className : "car", style :{color : "red"}},"car"),
//         React.createElement(
//             "li",
//             {className : "jeep", style:{color : "yellow"}},"jeep"),
        
    
//     );

//                                             // array to list
// const Mobiles = ["apple", "samsung", "nokia"];
// // using map method
// const MobileLoop = Mobiles.map((mobile, index) => {
//     return React.createElement("li", {key : mobile + index}, mobile)
// });

// // to loop List and MobileLoop
// const Looped = React.createElement("div", null, List, MobileLoop);
 

// ReactDOM.render(Looped, document.getElementById("container"))

// ///////////////////////////////////////////////////////////////////////////////////////////////////////

                                                    // jsx

// creating element using jsx and get access to previous data

// creating element
// console.log("started");
// const Element = <h1>Heloo</h1>
// console.log(Element);

// granting access

// const String = "Vikram";
// const String2 = <h1>Kamal's {String} </h1>

// // converting array to h1 using map 
// const Mobiles = ["apple", "Samsung", "Nokia"];

// const LoopedMobiles = Mobiles.map((value) => {
//     return <h1>{value}</h1>;

// });

// // converting array to list using map 

// const Amobiles = ["apple", "Samsung", "Nokia"];
// const Mob = (
//     <ul>
//        {Amobiles.map((value) => {
//            return
//            <li>
//                {value}
//            </li>
//        })}
//     </ul>
// )



// ReactDOM.render(Mob, document.getElementById("container"));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                                    // class Component(PascalCase), use {}, use this 

// class Header extends React.Component{
//     render() { ////write statement outside return using {}
//         return (
//             <h1>I am header {this.props.logo} </h1>


//         );
//     }
// };

// ReactDOM.render(<Header logo = "Audi"/>, document.getElementById("container"));

////////////////////////////////////////////////////////////////////////////////////////////////////////////

                                    // function Component
                                
// 3 methods
// no render, write statement inside return 

// 1 method
function Content(props) {
    return(
       <h1>I am content - {props.logo} - {props.product} </h1>
    )
};

// 2nd method
function Header({logo,product}){
    return(
        <h1>I am Header - {logo} - {product} </h1>
    )
};

// 3rd method
function Footer(props){
    let{logo, product} = props;
    return( 
        <h1>I am footer - {logo} - {product} </h1>
    )
}

ReactDOM.render(
<div>
<Content logo = "AstonMartin" product = "Bond's car"/>
<Header logo = "Pagani" product = "unique design"/>
<Footer logo = "RR" product = "engine"/>
</div>,
 document.getElementById("container"));

