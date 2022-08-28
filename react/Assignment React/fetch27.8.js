class FetchData extends React.Component{
    state={
        data:[],
    }


fetchedDataFun() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
        return res.json();

    })

    .then((fetchedData)=>{
        this.setState({
            data: fetchedData,
        })
    })
    .catch((err)=>{
        console.log(err);
    })

}

render(){
    return (
        <div>
            <button onClick={()=>{
                this.fetchedDataFun();
            }}
            >
                    click
            </button>
            {this.state.data.map((value)=>{
                return <h4>{value.title}</h4>;
            })}
        </div>
    )
}

}

ReactDOM.render(<FetchData/>,document.getElementById("container"))