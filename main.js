//Practice code
class Printer{
    name = "I'm a printer";
    printName(){
        console.log("Class name: ", this.name);
    }
    printNameArrowFunction = () => {
        console.log("Class name: ", this.name)
    }
}

const myPrinter = new Printer();
/* myPrinter.printName();
myPrinter.printNameArrowFunction(); */

const customPrinter = {
    name: "Custom Printer",
    printName: myPrinter.printName,
    arrowPrint: myPrinter.printNameArrowFunction
}

customPrinter.printName();
customPrinter.arrowPrint();