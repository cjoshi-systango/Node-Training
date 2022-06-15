class Area{
    constructor(hieght,width)
    {
        this.hieght = hieght;
        this.width = width;
    }
    findArea()
    {
        return this.hieght * this.width;
    }
}

class Rectangle extends Area{

}
// using class inheritance from expression
let obj = new Rectangle(5,10).findArea();
console.log(obj);