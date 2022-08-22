// promises : there are asyncronous and web apis
// three atates of promises
// 1.pending
// 2.resolved
// 3.rejected

console.log("start");

new Promise(function (resolve,reject){
    if ( 10 > 4) {
        resolve("sucess");
    } else {
        reject("error");
    }
})
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
});

console.log("ended");

// 

const myPromis = new Promise(function (resol1, rej) {
    setTimeout(() => {
        resol1("succesfully done");
    }, 4000);
});

myPromis
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });

// all act AND operator
// Promise.all([firstPromis, myPromis])
//     .then(() => {}) 
//     .catch(() => {});