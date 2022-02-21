//Practice code
const original = {
    userName: 'Hazzimov',
    userDetails: {
        name: "Hazzim",
        lastname: "Escarcega",
        location: {
            adress: "First street #21",
            City: "Hidalgo del Parral",
            state: "Chihuahua",
            country: "Mexico"
        }

    }
}
/*
----Normal copy-------

when we change a value from the copy it gets reflected on the original

const copy = original;
copy.name = "Said Hazzim";


*/
/*
------Object.assign copy--------
When we change a value from the second layer of objects it gets reflected on the original 
because it also does a shallow copy 

const copy = Object.assign({}, original);

copy.userDetails.name = "Said Hazzim";

*/

/*
-----------Deep Copy---------------
When we use deep copy both values remanin different because we have
 copied the whole object
*/
const copy = JSON.parse(JSON.stringify(original));

copy.userDetails.name = "Said Hazzim";
console.log(original);
console.log(copy);

