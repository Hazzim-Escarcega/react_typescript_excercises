//Practice code
const userDetails = {
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


/* ------Rest operator ----------
function sum(...thisArgs){
    return thisArgs.reduce(function(previous, current){
        return previous + current;
    })
}
console.log(sum(5, 5, 5)); 

const newUserDetails = {...userDetails, mobile: '6141234567'}
console.log("User details: ", userDetails)
console.log("New user details: ", newUserDetails)

*/

/* -----Destructuring ------- */

const {userName, ...otherDetails} = userDetails;

console.log(userName);
console.log(otherDetails);
