//everrything wraps inside curly braces 
// class Component
// in old projects class is used

class Welcome extends React.Component{

    render() {
        console.log(this.prop);
        let firstName = "Avi";
        return(
            <div>
                <h1>
                    Welcome {firstName} and {this.props.secondName}
                </h1>
                <button onClick = {this.getData}>Click</button>
                <button onClick = {this.greet.bind(this)}>greet</button>
                <button
                onClick={() => {
                    this.getName();
                }}>
                   get name 
                </button>
                {/* <button onClick = {this.getName.bind(this)}> get name</button> */}
                {/* above code also works */}
            </div>
        );
    }
    getData(){
        console.log("get data excetued");
        console.log(this);
    }

    greet() {
        console.log("greet method excecuted");
        console.log(this);
    }

    getName() {
        console.log(this.props.children);
    }
};

ReactDOM.render(

    <Welcome secondName = "Ram">
      <h1>hello</h1>
    </Welcome>,
    document.getElementById("container")
    );
