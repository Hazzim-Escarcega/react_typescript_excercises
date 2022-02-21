/* console.log(x); //Returns undefined because of hoisting
var x = "Test";


console.log(y); //Returns uncaught reference error because of not having hoisting
let y = "Test";

console.log(z); //Returns uncaught reference error because of not having hoisting
const z = "Test"; */


/* test(); //we can execute functions before its declaration because of hoisting
function test(){
    console.log("Im a function");
} */

/* function test(){//We can not call variables declared inside a function from the outside of that function because the scope
    var nice = "Test";
}
console.log(nice);
 */

/* if(true){//We can use VAR to print the variable outside the if statement, but not LET or CONST because of the BLOCK SCOPE condition
    var test = "Test";
}
console.log(test); */

for( let i = 0; i < 3; i++ ) {//we create a function to separate the variable from the for loop creating a scope
    (function test(o){
        alert(o);
    })(i)
}

