// Type annotations
function greeter(person:string) {
  return `Hello ${person}`;
}

const personName = 'John';
console.log(greeter(personName));
// console.log(greeter(1)); // Error: Argument of type '1' is not assignable to parameter of type 'string'.

const people = ['John', 'Jane'];
// console.log(greeter(people)); // Error: Argument of type 'string[]' is not assignable to parameter of type 'string'.


// Interface
interface Person {
  firstName: string,
  lastName: string,
}

function personGreeter(person: Person) {
  return `Hello ${person.firstName} ${person.lastName}`;
}

const person: Person = {
  firstName: 'Jane',
  lastName: 'User',
}
console.log(personGreeter(person));


// Classes
class Student {
  fullName: string;
  constructor(public firstName: string, public middleName: string, public lastName: string) {
    // The use of public on arguments to the constructor is a shorthand
    // that allows us to automatically create properties with that name.
    this.fullName = `${firstName} ${middleName} ${lastName}`;
  }
}

let user = new Student('Jane', 'M.', 'User');
console.log(personGreeter(user));
