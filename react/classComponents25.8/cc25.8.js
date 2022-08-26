//COMPONENTS-Independent set of codes
//It is developed individually and code can be reusable
// 2 types==>1.class components
//2.functional components
//to create a component you should follow the pascle case
//jsx rules
//if we have more than two elements we have to wrap it inside the paranthesis
//if more than one element is there in the component then you have to wrap it inside parent element

//class components has class keyword
//and mandatory to have render


// to create a component you should follow pascale case
// all the coponenets must be angular bracets


// jsx rules 
// if we have more than wo elements we have to wrap it inside parenthisis
// if more than one eleemnt is there in the componenet then you have to wrap it inside
// parent element


// creating component
class Header extends React.Component{
    render() {
        console.log(this.props.firstName);
        console.log(this.props.lastName);
        return(
     <div>
       <div>
        <h1>i am a new header</h1>
        <p>hkjnkjnckjnzlknkjnkajjkjnkjn</p>
        <h1>hello {this.props.firstName}</h1>
       </div>
        <div></div>
     </div>
        );
    }
}

// 

class Content extends React.Component{
    render() {
        console.log(this.props.pageDetailes);
        return (
            <div>
        <h1>Hello I am content page</h1>
        <h2>This is the body of the complete webpage {this.props.pageDetailes}</h2>
        </div>
        );
    }
}

//to work wrap two containers inside div
ReactDOM.render(
<div>
    <Header firstName="megha" lastName="gowda"/> 
    <Content pageDetailes="*content of the page*"/> 
</div>, 
document.getElementById("container")

);

// create footer component

// class Footer extends React.Component{
//     render() {
//         return <h1>I am footer</h1>;
//     }

// };

// ReactDOM.render(
//     <Footer/>, document.getElementById("container")
// );