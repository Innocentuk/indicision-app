/* Setup constructor to take name and age (default to 0)
   getDescription - Eucheria Innocent is 28 year(s) old.
 */
class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi, I am ${this.name}`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}
/* const me = new Person("Eucheria Innocent", 28);
console.log(me.getGreeting());
console.log(me.getDescription()); */

class Student extends Person {
  constructor(name, age, course) {
    // supper() is used to call the parent constructor Person into the child
    // constructor Student
    super(name, age);
    this.course = course;
  }
  hasCourse() {
    return !!this.course;
  }
  /* In other to override the parent method getDescription
  we re-define the same method in Student class.
*/
  getDescription() {
    let description = super.getDescription();
    if (this.hasCourse()) {
      description += ` Their course is ${this.course}.`;
    }
    return description;
  }
}

/* const student = new Student("Eucheria Innocent", 28, "Computer Science");
console.log(student.getGreeting());
console.log(student.getDescription());

const other = new Student();
console.log(other.getDescription()); */

/* create a child class Traveler
   Add support for homeLocation
   Override getGreeting()
   1. Hi am Eucheria Innocent. I'm visiting from CPH
   2. Hi, I am Eucheria Innocent
 */
class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();
    if (this.homeLocation) {
      greeting += `, I'm visiting from  ${this.homeLocation}.`;
    }
    return greeting;
  }
}
const traveler = new Traveler("Eucheria Innocent", 28, "Copenhagen");
console.log(traveler.getGreeting());

const other = new Traveler("Eucheria Innocent", 28);
console.log(other.getGreeting());
