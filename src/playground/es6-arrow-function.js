// ES5 function
/* const square = function(x) {
  return x * x;
} */
function square(x) {
  return x * x;
}
console.log(square(9));

// ES6 function => (arrowfunction)
/* const squareArrow = x => {
  return x * x;
}; */
// single line argument (shorthand syntax)
const squareArrow = x => x * x;
console.log(squareArrow(10));

/* challenge - use arrow function
   getFirstName('Eucheria Innocent') ->'Eucheria'
   create regular arrow function
   create arrow function using shorthand syntax
 */
/* const getFirstName = fullName => {
  return fullName.split(" ")[0];
}; */
// shorthand syntax
const getFirstName = fullName => fullName.split(" ")[0];
console.log(getFirstName("Eucheria innocent"));
