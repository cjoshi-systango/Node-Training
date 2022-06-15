let someArray = [1,2,4,4,4]

// in for in code block inside the loop is executed once for each property
for (const key in someArray) {
    console.log(key);
    if (Object.hasOwnProperty.call(someArray, key)) {
        const element = someArray[key];
        console.log("for in");
    }
}