//Practice code

/* For primitive types if we assign a primitive value to a variable and the we asign that variable
to an another variable and the we change the value of the first variable, the second one doesnt
gets affected because it copies assigned value

let sample = 5;
let copySample = sample;

sample = 10; */


/*For reference types both of the variables get affected because it only copies the memoty reference value of the variable and
not the value itself*/
let sample = {name: "Hazzim"};
let copySample = sample;

sample.lastName = "Escarcega";

console.log("sample: ", sample);
console.log("copySample: ", copySample);