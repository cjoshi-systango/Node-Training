// creating the new promise if promise get resolve then the .then will execute
// and if promise get reject the catch part will execute

let promise = new Promise((resolve,reject)=>resolve("hello"));
promise.then((value)=>console.log(value))