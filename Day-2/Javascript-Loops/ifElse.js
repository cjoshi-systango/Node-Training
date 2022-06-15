// in if else ,if the condition of if is true then it execute block of
// code written in if and if conditon is not true the else part will execute
let someCheck = true

for (let index = 0; index < 2; index++) {
    
    if(someCheck)
    {
        console.log("if");
        someCheck = false;
    }
    else{
        console.log("else");
    }
}