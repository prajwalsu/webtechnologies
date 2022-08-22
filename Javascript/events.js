function changeName(){
    const element=document.getElementById("name");
    element.innerText="Boss";    
}

function changeColor(){
    const element=document.getElementById("changeColor")
    element.style.backgroundColor="red";

}

function removeColor(){
    const element=document.getElementById("changeColor");
    element.style.backgroundColor="white";

};


function setBodyAttr(attr,value){
    console.log(value);
    console.log(attr);
    if(document.body)
        document.body[attr]=value;
    else
        throw new error("no support")
}