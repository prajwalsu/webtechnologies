class Parent extends React.Component {
    constructor() {
      //1.initialization and binding
      super();
      this.state = {
        data: "My data",
        show: true,
      };
      console.log("Constructor method exicuted");
    }
  
    static getDerivedStateFromProps(props, state) {
      // this method will either return null or new state
      console.log("getDerivedStateFromProps is exicuted");
      return null;
    }
  
    componentDidMount() {
      // all kind of
      // it will be exicuted on success full mounting of component to real DOM
      console.log("componentDidMount exicuted");
    }
  
    shouldComponentUpdate() {
      console.log("shouldComponentUpdate");
      return true;
    }
  
    getSnapShotBeforeUpdate() {
      console.log("getSnapShotBeforeUpdate exicuted");
      return "position";
    }
  
    componentDidUpdate(pevProp, preState, snapShot) {
      console.log("componentDidUpdate exicuted");
  
      console.log(pevProp);
      console.log(preState);
      console.log(snapShot);
    }
  
    updateText(text) {
      this.setState({
        data: text,
        show: false,
      });
    }

    render() {
      // in the render method also do not write any business logic
  
      console.log("render method exicuted");
      return (
        <div>
          <h1>{this.state.data}</h1>
          <button
            onClick={() => {
              this.updateText("updating phase");
            }}
          >
            click
          </button>
  
          {this.state.show ? <Child /> : ""}
        </div>
      );
    }
  }
  
  class Child extends React.Component {
    render() {
      return <div>Child Component</div>;
    }
  
    componentWillUnmount() {
      console.log("Component is un mounted");
    }
  }
  
  ReactDOM.render(<Parent />, document.getElementById("container"));