class Parent  extends React.Component{
    ComponentDidMount() {
        // this is method will be executed for the first time mounting to real DOM
        // it is used to make sideeffects to the componenet
        // you can make api calls in this method

        console.log("parent componenetDidMount executed");
    }
    constructor() {
        super();
        this.state={
            text: "mounting phase",
            show : true,
        };
        console.log("parent consttructor executed");
    }
    static getDerivedStateFromProps(props, state) {
        // 1.it returns state or if there is no change in the state then it will return null
        console.log("parent getDerivedStateFromProps executed");
        return state;
    }

    render() {
        // in render method we should update anything or we should not
        // perform any side effects. because if try to update anything
        // render method it will do to finet loop
        console.log("render method executed");
        return(
            <div>
                {this.props.age}
                <h1>{this.state.text}</h1>
                <button onClick = {() => {
                    this.updateText("updating phase");
                }}>
                    click
                </button>
            </div>
        );
    }
    updateText(text) {
        this.setState({
            text:text,
            show: false
        });
    }
    shouldComponentUpdate() {
        console.log("Parent shouldComponenetUpdate executed");
        return true;
    }

    getSnapshotBeforeUpdate(prevProp, prevState) {
        console.log("parent getSnapshotBeforeUpdatte ececuted");
        return "scrolling position";
    }

    componentDidUpdate(prevProp, prevState, snapshot) {
        console.log("parent componenetDidUpdate executed");

        console.log("previous prop", prevProp);
        console.log("previous state", prevState);
        console.log("snapshot", snapshot);

    }
}

class Child extends React.Component {
    render() {
        return <div>child componenet</div>
    }

    componentWillUnmount() {
        console.log("dhild domponenetwillUnmount");
    }
}

ReactDOM.render(<Parent age="23"/>, document.getElementById("container")
);