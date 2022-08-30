// class Fetch extends React.Component {
//     state = {
//       users: [],
//     };
  
//     fetchData() {
//       fetch("https://jsonplaceholder.typicode.com/users")
//         .then((res) => {
//           return res.json();
//         })
//         .then((data) => {
//           this.setState({
//             users: data,
//           });
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
  
//     render() {
//       return (
//         <div>
//           <h3>For getting user data click here</h3>
//           <button
//             onClick={() => {
//               this.fetchData();
//             }}
//           >
//             Click Here
//           </button>
//           {this.state.users.map((value, ind) => {
//             return (
//               <table
//                 style={{ border: "1px solid black", borderCollapse: "collapse" }}
//                 className="table"
//               >
//                 <tr>
//                   <th
//                     style={{
//                       border: "1px solid black",
//                       borderCollapse: "collapse",
//                     }}
//                     className="th"
//                   >
//                     Id
//                   </th>
//                   <th
//                     style={{
//                       border: "1px solid black",
//                       borderCollapse: "collapse",
//                     }}
//                     className="th"
//                   >
//                     Name
//                   </th>
//                   <th
//                     style={{
//                       border: "1px solid black",
//                       borderCollapse: "collapse",
//                     }}
//                     className="th"
//                   >
//                     Username
//                   </th>
//                   <th
//                     style={{
//                       border: "1px solid black",
//                       borderCollapse: "collapse",
//                     }}
//                     className="th"
//                   >
//                     Email
//                   </th>
//                 </tr>
//                 <tr>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       borderCollapse: "collapse",
//                     }}
//                     className="tr"
//                     key={ind}
//                   >
//                     {value.id}
//                   </td>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       borderCollapse: "collapse",
//                     }}
//                     className="tr"
//                   >
//                     {value.name}
//                   </td>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       borderCollapse: "collapse",
//                     }}
//                     className="tr"
//                   >
//                     {value.username}
//                   </td>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       borderCollapse: "collapse",
//                     }}
//                     className="tr"
//                   >
//                     {value.email}
//                   </td>
//                 </tr>
//               </table>
//             );
//           })}
//         </div>
//       );
//     }
//   }
  
//   ReactDOM.render(<Fetch />, document.getElementById("container"));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Fetch extends React.Component {
    state = {users:[],}

    fetchData() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{return res.json()})
        .then((data)=>{this.setState({users:data,})})
        .catch((err)=>{console.log(err);})
    }

    render() {

        return(
            <div>
                <h3>To get data click here</h3>
                <button onClick = {()=>{this.fetchData();}}>click me</button>
                {this.state.users.map((value, ind)=>{
                    return(
                        <table style={{border:"1px solid black",  borderCollapse : "collapse",}} className="table">
                            <tr>
                            <th style={{border:"1px solid black", borderCollapse : "collapse",}} className="th">ID</th>
                            <th style={{border:"1px solid black", borderCollapse : "collapse",}} className="th">name</th>
                            <th style={{border: "1px solid black",borderCollapse: "collapse",}}className="th">Username</th>
//                          <th style={{border: "1px solid black",borderCollapse: "collapse",}}className="th">Email</th>
                            </tr>
                            <tr>
                            <td style={{border:"1px solid black", borderCollapse : "collapse",}} className="tr" key={ind}>{value.id}</td>
                            <td style={{border:"1px solid black", borderCollapse :"collapse",}} className="tr">{value.name}</td>
                            <td style={{border: "1px solid black",borderCollapse: "collapse",}}className="tr">{value.username}</td>
//                          <td style={{border: "1px solid black",borderCollapse: "collapse",}}className="tr">{value.email}</td>
                            </tr>                       
                        </table>
                    )
                })}
            </div>
        );
    }
}

ReactDOM.render(<Fetch/>,document.getElementById("container"))
