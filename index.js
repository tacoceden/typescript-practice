// Type annotations
function greeter(person) {
    return "Hello " + person;
}
var person = 'John';
console.log(greeter(person));
// console.log(greeter(1)); // Error: Argument of type '1' is not assignable to parameter of type 'string'.
var people = ['John', 'Jane'];
function personGreeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}

var me = {
    firstName: 'Jane',
    lastName: 'User'
};
console.log(personGreeter(me));
// Classes
var Student = /** @class */ (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        // The use of public on arguments to the constructor is a shorthand
        // that allows us to automatically create properties with that name.
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
    return Student;
}());
var user = new Student('Jane', 'M.', 'User');
console.log(personGreeter(user));
