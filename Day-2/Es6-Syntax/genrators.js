// using genrator function we can not stop the generator if we yeild then 
// it continue the execution after the yeild

function * generatorFunc()
{
    console.log("generator function");
    yield "hello";
    console.log("generator function");
    yield "world";
}

let obj = generatorFunc();

console.log(obj.next().value);
console.log(obj.next().value);