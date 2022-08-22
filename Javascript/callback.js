// call back function : itis a funcition
// whic take function is an argumeny

// why call back function 
// we need call back function to hNDLE THE
// asynchronus hehaviour of java script

function first(callback) {
    setTimeout(() => {
        console.log("first Executted");
        callback();
    }, 6000);
}

function second() {
    setTimeout(() =>{
        console.log("heloo");
    }, 3000);
}

first(second);

// call back hell
// const animateAll = (animate) => {
//     setTimeout(() => {
//         animate();
//         setTimeout(() => {
//             animate();
//             setTimeout(() => {});
//         });
//     }, 2000);
// };

// call back inside a call back will lead to call back 
// hell or pirramid of doom


