// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  //console.log(arguments);
  return a + b;
};
console.log(add(10, 34));

//this keyword - no longer bound
/* const user = {
  name: "Chinaza",
  cities: ["Awka", "Mubi", "lagos"],
  printPlacesLived: function() {
    const that = this; // assign this to that, to be able to use for self ref
    that.cities.forEach(function(city) {
      console.log(that.name + " has lived in " + city);
    });
  }
}; */
// removing most of the function keyword
/* const user = {
  name: "Chinaza",
  cities: ["Awka", "Mubi", "lagos"],
  printPlacesLived() {
    this.cities.forEach(city => {
      console.log(this.name + " has lived in " + city);
    });
  }
};
user.printPlacesLived(); */

// using map to loop instead of foreach. map can be used to transform each item
const user = {
  name: "Chinaza",
  cities: ["Awka", "Mubi", "lagos"],
  printcitiesLived() {
    return this.cities.map(city2 => this.name + " has lived in " + city2);
    /*     {
      return this.name + " has lived in " + city2;
    }); */
  }
};
console.log(user.printcitiesLived());

// challenge area
/* number - array of numbers
   multiplyBy - single number
   multiply - return a new arry where the numbers have been multiplied
 */
const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 5,
  multiply() {
    return this.numbers.map(number => this.multiplyBy * number);
  }
};
console.log(multiplier.multiply());
