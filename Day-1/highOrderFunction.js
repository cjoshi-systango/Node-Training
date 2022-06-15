function calculation(operation,intialValue,numbers)
{
    let result = intialValue;
    for(const number of numbers)
    {
        result = operation(result,number);
    }
    return result;
}

function sum(number1,number2)
{
    return number1 + number2;
}

function multiply(number1,number2)
{
    return number1 * number2;
}

console.log(calculation(sum,0,[10,13])); 
console.log(calculation(multiply,1,[5,8])); 

// calculation is high order function because it takes function as argument 


let globalVariable = 10;

function add(number)
{
    let anotherNumber = 6;

    function addInner()
    {
        console.log(globalVariable+anotherNumber+number);
    }

    return addInner;
}

const INNER = add(6);

INNER();

// Closure in action that is inner function can access to outer function variable as well as 
// global variables


function curryingFunction(a)
{
    return function(b)
    {
        return function(c)
        {
            return function(d)
            {
                console.log(a+b+c+d);
            }
        }
    }
}

curryingFunction(5)(4)(6)(3);
