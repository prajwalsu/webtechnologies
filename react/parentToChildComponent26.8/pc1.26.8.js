// passing the data from parent to child

function App(props) {
    let name = "Akshatha";
    return (
        <div>
            <h1>Name: {props.loggedInUser}</h1>
            <Home appName="Netflix" user={name}/>
            {/* child of my app componenet */}
        </div>
    );
}

function Home(props) {
    return (
        <div>
            <h1>Welcome {props.user}</h1>
            {/* welcomeAkshatha */}
        </div>
    );
}

ReactDOM.render(
    <App loggedInUser = "Vaibhav"/>,
    document.getElementById("container")
);


// create parent have 1 object fnmae,lname,age pass to child in child coponent print
