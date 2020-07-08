function greeter(person) {
    return `Hello ${person}`;
}
const personName = 'John';
console.log(greeter(personName));
const people = ['John', 'Jane'];
function personGreeter(person) {
    return `Hello ${person.firstName} ${person.lastName}`;
}
const person = {
    firstName: 'Jane',
    lastName: 'User',
};
console.log(personGreeter(person));
class Student {
    constructor(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = `${firstName} ${middleName} ${lastName}`;
    }
}
let user = new Student('Jane', 'M.', 'User');
console.log(personGreeter(user));
