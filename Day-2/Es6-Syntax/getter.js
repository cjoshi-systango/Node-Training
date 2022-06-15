class getter{
    static myname = "chetan";
    // using getter
    get getName()
    {
        return this.myname;
    }
}

console.log(getter.myname);