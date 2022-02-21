

/* 
Logical OR "||" uses the pipe simbol
const test = 5 || 6; //number 5 gets selected because is a truthy value
const sample = 0 || 20; //20 is selected instead of 0 because is a truthy value also 0 is a falsy value


// in this clause nulls gets selected because the operation searches for truthy values in order
//so when doesnt find any selects the last value compared in this case the null value
const sample = 0 || false || null; 
//Output
console.log(test);
console.log(sample); */

const test = 5 && 6; //number 6 gets selected because is a falsy value
const sample = 0 && 20; //0 is selected instead of 20 because is a falsy value

//Output
console.log(test);
console.log(sample);

