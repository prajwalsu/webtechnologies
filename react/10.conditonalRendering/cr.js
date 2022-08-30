class MyApp extends React.Component{
    state = {
        adminName : "Namana",
        user : "Avi",
        isAdmin : true,
    };
    changeView() {
        if (this.state.isAdmin) {
            this.setState({
                isAdmin:false,
            });
        } else {
            this.setState({
                isAdmin:true,
            });
        }
    }

    render() {
        let { adminName, user, isAdmin } = this.state; //destructring
        let renderedData = null;
        if (isAdmin) {
            renderedData = (
                <div>
                    <h1>Admin is</h1>
                    <h2>Home</h2>
                    <h2>Add products</h2>
                </div>
            );
        }else {
            renderedData = (
                <div>
                    <h1>UseName : {user}</h1>
                    <h1>Home</h1>
                    <h1>Products</h1>
                </div>
            );
        }

        return (
            <div>
                <button 
                onClick = {()=>{
                    this.changeView();
                }}>
                    {isAdmin? "see user view" : "see admin view"}
                </button>

            </div>
        );
    }
}

ReactDOM.render(<MyApp/>, document.getElementById("container"))