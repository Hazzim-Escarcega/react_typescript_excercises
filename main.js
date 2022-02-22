//Practice code
class Shape{
    #privateVariable = "I'm a private variable"; //We cannot access this variable from the outside
    publicVariable = "I'm a public variable";
    static staticVariable = "I'm a static variable";//in order to call this variable we will have to call the class first and then the variable

    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    getArea(){
        return "Not implemented";
    }
}

class Square extends Shape{
    getArea() {
        return this.height * this.width;
    }
    getParentArea(){
        return super.getArea();
    }
}
const mySquare = new Square(5, 10);

console.log(mySquare.width);
console.log(mySquare.height);
console.log(mySquare.getArea());
console.log(mySquare.getParentArea())
console.log(Shape.staticVariable)