class Setter{
    constructor(myname)
    {
        this.myname = myname;
    }

    get myname()
    {
        return this._myname;
    }
    //using of setter.if remove the setter it will throw error
    set myname(newName)
    {
        this._myname = newName;
    }
}
Setter.myname = "chetan";
let obj = Setter.myname;
console.log(obj);