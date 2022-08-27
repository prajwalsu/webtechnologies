// data = ["Chocolates", "Mango", "Apple", "strawberry","bannana" ];

//props r unidirectional
function Parent() {
    let data = ["Chocolates", "Mango", "Apple", "strawberry","bannana" ];

    let data2 = [
        {firstName : "megha", lName : "T A", phn:123456},
        {firstName : "Nayana", lName : "s r", phn:123456},
        {firstName : "avi", lName : "palereys", phn:123456},
        {firstName : "namana", lName : "jain", phn:123456},
    ]
    
    return(
        <div>
            <h1>Welcome to parent Component</h1>
            <Child data = {data} data2={data2}/>
        </div>
    )
};

function Child(props) {
    console.log(props.data);
    console.log(props.data2);
    return (
        <div>
            <h1>This is my child Componenet</h1>

            {props.data.map((value, ind) => {
                return <p key={ind}>{value}</p>
            })}
            

            {props.data2.map((value, ind) => {
                    return <h1 key = {ind}>{value.firstName}</h1>;

            })}
        </div>
    );
}

ReactDOM.render(<Parent/>,document.getElementById("container") )
