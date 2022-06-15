//passing the rest parameter. we can pass as much as argumnet we want
let restParameterFunc = (...arg)=>{
    let total = 0;
    for(const number of arg)
    {
        total += number; 
    }
    return total;
}

console.log(restParameterFunc(10,20));
console.log(restParameterFunc(10,20,40,50));