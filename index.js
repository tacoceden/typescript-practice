function greeter(person) {
    return "Hello " + person;
}
var personName = 'John';
console.log(greeter(personName));
var people = ['John', 'Jane'];
function personGreeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var person = {
    firstName: 'Jane',
    lastName: 'User'
};
console.log(personGreeter(person));
var Student = (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
    return Student;
}());
var user = new Student('Jane', 'M.', 'User');
console.log(personGreeter(user));
