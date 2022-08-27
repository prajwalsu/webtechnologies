// important

function Welcome(props) {
    const getData = () =>{
        console.log("Button clicked");
        console.log(props.firstName);
    };
    return(
        <div>
            <h1>
                This is Functional Component
            </h1>
            <button onClick = {getData}>Click me</button>
        </div>
    )
}

ReactDOM.render(
<Welcome firstName = "Namana"/>, 
document.getElementById("container")
);
