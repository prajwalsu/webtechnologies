// functional component
// no render in functional component



// Header function component
function Header(props){ //must write props
    return(
        <div>
        <h1>
            I am in header componenet-{props.logo}-{props.brand}-{props.tag}
        </h1>
        <img src = {props.logo}/>
        </div>
    )
};


// Content function component
// more than one statement use div
function Content({fName, lName}){
    return(
        <div>
        <h1>I am in Content componenet</h1>
        <p>
            Name:{fName} - intial:{lName}
        </p>
        </div>
    )
};


// Footer function component
// destructuring function
function Footer(props){
    let{name, age} = props;
    return(
        <h1>
            name:{name} - age:{age}
        </h1>
    );
}



ReactDOM.render(
<div>
    <Header logo = "download.jfif" brand="lambo" tag="luxury"/>
    <Content fName="Nayana" lName="S R"/>
    <Footer name="Avi" age="22" />
</div>
    ,document.getElementById("container"));