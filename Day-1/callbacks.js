function shouldExecuteFirst(callback)
{
    console.log("This will be executed first");
    callback();   
    
}

function itWillExecuteAfterFirstFunction()
{
    console.log("It will execute second");
}

shouldExecuteFirst(itWillExecuteAfterFirstFunction); 

//When we pass another function in the argument it is called as callback function