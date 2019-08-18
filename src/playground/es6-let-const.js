// var to define variable
var nameVar = "Evans";
var nameVar = "Damian";
console.log("nameVar:", nameVar);

// use let instead
let nameLet = "Livinus";
nameLet = "Frances";
console.log("nameLet:", nameLet);

// Using const variable
const constName = "Afoma";
console.log("constName:", constName);

function getPetname() {
  let petName = "Lulu";
  return petName;
}
let petName = getPetname();
console.log("petName:", petName);

// block scoping (const and let are block level scoped)
const fullName = "Chioma Ijeoma";
let firstName;
if (fullName) {
  firstName = fullName.split(" ")[0];
}
console.log(firstName); // var works for both in and out of the block
