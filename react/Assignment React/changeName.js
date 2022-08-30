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
        console.log("before setstate:", this.state.firstName); 

        this.setState(
         {
            firstName : "Himagirish",
         },
        
         () => {
            console.log("after setstate",this.state.firstName); 

         }

         
        );

    };

    changeAge=() => {
        console.log("before setstate:", this.state.age); 

        this.setState(
         {
            age:21,
         },
        
         () => {
            console.log("after setstate",this.state.age); 

         }

         
        );
    };
    render() {

        // console.log(this.prop.lName);
        return(
            <div>
                <h1>
                    firstName:{this.state.firstName},
                </h1>
                <button onClick={()=>{
                    this.changeName();
                }}>click to change name</button>


                <h1>
                 age: {this.state.age}
                 </h1>
                 <button onClick={()=>{
                    this.changeAge();
                }}>click to change age</button>

            </div>
        )
    }
};

ReactDOM.render(<Greet/>, document.getElementById("container")
);

