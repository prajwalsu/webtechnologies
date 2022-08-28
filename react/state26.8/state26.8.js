// 16.8, there were so many drawbacks that's y used functional component
// state can be modified
// state is build in object, used to  contain data or info about component
// we cant change props
// every time state of the object changes and re render the component
// state object is initilized in the constructor
// state objects can store multiples points
// we can change setSate() to change value of the state
// setstate() function perform shallow between new and old function4
// in class state is built in object
// before setstate class called statefull state
// props r imutable
// states r mutable
// class components r state full
// function component not state full(before 16.8)
// props r unidirectional


// we update in event listiner

class Greet extends React.Component{
    state = {
        firstName:"Prajwal",
        age : 22,
    };

    changeName=() => {
        console.log("before setstate:", this.state.firstName); //prajwal

        this.setState(
         {
            firstName : "Himagirish",
            age : 21
         },
        
         () => {
            console.log("after setstate",this.state.firstName); //Himagirish

         }
        );

        // changeProp = () => {
        //     this.props.lName = "Ramana";//props r immutable
        // }

    };
    render() {
        // console.log(this.prop.lName);
        return(
            <div>
                <h1>
                    firstName:{this.state.firstName}, age: {this.state.age}
                </h1>
                {/* <h2>{this.props.lName}</h2>
                <button
                 onClick={() => {
                     this.changeProp();
                 }}>
                     change prop
                 </button> */}
                <button onClick={()=>{
                    this.changeName();
                }}>click to change name</button>
            </div>
        )
    }
};

ReactDOM.render(<Greet lName="Avi"/>, document.getElementById("container")
);

// class Greet extends React.Component {
// // creating state
//     state = {
//         fName : "praju",
//         age : "22"
//     }

//     render() {
         
//         return;
//     }
// }