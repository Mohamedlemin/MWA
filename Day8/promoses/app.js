const express = require("express")

// const promise1 = new Promise((resolve,reject)=>{
//   const  number = Math.random();
//   setTimeout(() => {
//     if (number>0.5) {
//         resolve(number)
//       }else{
//         reject("Error in promes 1")
//       }
//   }, 1000);
  
// });
// const promise2 = new Promise((resolve,reject)=>{
//   const  number = Math.random()+0.5;
//   setTimeout(() => {
//     if (number>0.5) {
//         resolve(number)
//       }else{
//         reject("Error in promes 2")
//       }
//   }, 2000);
  
// });
// const promise3 = new Promise((resolve,reject)=>{
//   const  number = Math.random() - 0.5;
//   setTimeout(() => {
//     if (number>0.5) {
//         resolve(number)
//       }else{
//         reject("Error in promes 3")
//       }
//   }, 3000);
  
// });


/////////////////////////////////////

// promise1.then(
//     (value)=>{
//         console.log("done",value);
//     }
// ).catch((err)=>{
//     console.log("error",err);
// })

// all of them success or nothing
// Promise.all([promise1,promise2,promise3]).then((data)=>{
//     console.log("data",data);
// }).catch((err)=>{
//     console.log("err",err);
// })

// //  first one success 
// Promise.race([promise1,promise2,promise3]).then((data)=>{
//     console.log("data",data);
// }).catch((err)=>{
//     console.log("err",err);
// })

function resovePromesisAfter2sec() {
    return new Promise(resolve=>setTimeout(() => {
        resolve("done after 2 sec")
    }, 200))
}

// let somthing = resovePromesisAfter2sec().then((data)=>{
//     console.log(data);
// })

// console.log(somthing)
 // sync - > Async
myAsyncFunction = async function () {
    console.log("start async");
    resovePromesisAfter2sec().then((data)=>{
        console.log(data);
    })
    console.log("After promes");
}
console.log("start");
myAsyncFunction()
console.log("Async func end");
