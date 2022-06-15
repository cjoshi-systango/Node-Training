class Tripler{
    //defining static members
    static myname = "chetan";
    static about = "tripler the base class";

    static opration(n=1)
    {
        return n*3;
    }
}

class SquareOfTriple extends Tripler{
    static about = "square of triple child class";
    static opration(n)
    {
        return super.opration(n) * super.opration(n);
    }
}

console.log(Tripler.about);
console.log(Tripler.opration(3));

console.log(SquareOfTriple.about);
console.log(SquareOfTriple.myname);
console.log(SquareOfTriple.opration(3));

