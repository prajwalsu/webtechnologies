function MyApp() {
    const [person,setPerson] = React.useState({
        fName : "Himagirish",
        lName:" N D"
    });

    //object change refernce so take ... dots(create another one)
    function updateName() {
        setPerson({
            ...person,
            fName : "vaibhav",
        });
    }

    return(
        <div>
            <p>{person.fName}</p>
            <p>{person.lName}</p>
            <button onClick={()=>{
                updateName();
            }}>
                click
            </button>
        </div>
    );
}

ReactDOM.render(<MyApp/>,document.getElementById("container"))