//symbol is declared
let sym = Symbol();
let sym1 = Symbol();

console.log(typeof sym);

let obj = {
};

obj[sym] = "symbol";
obj[sym1] = "sym1"

let temp = obj[Object(sym)]; 
console.log(temp);
//symbol is always unique
