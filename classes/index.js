var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var Classes;
(function (Classes) {
    class Greeter {
        constructor(message) {
            this.greeting = message;
        }
        greet() {
            return "Hello, " + this.greeting;
        }
    }
    let greeter = new Greeter("world");
    let Inheritance;
    (function (Inheritance) {
        class Animal {
            move(distanceInMeters = 0) {
                console.log(`Animal moved ${distanceInMeters}m.`);
            }
        }
        class Dog extends Animal {
            bark() {
                console.log('Woof! Woof!');
            }
        }
        const dog = new Dog();
        dog.bark();
        dog.move(10);
        dog.bark();
    })(Inheritance || (Inheritance = {}));
    let Public;
    (function (Public) {
        class Animal2 {
            constructor(theName) { this.name = theName; }
            move(distanceInMeters) {
                console.log(`${this.name} moved ${distanceInMeters}m.`);
            }
        }
    })(Public || (Public = {}));
    let Private;
    (function (Private) {
        var _name;
        class Animal3 {
            constructor(theName) {
                _name.set(this, void 0);
                __classPrivateFieldSet(this, _name, theName);
            }
        }
        _name = new WeakMap();
        class Animal4 {
            constructor(theName) { this.name = theName; }
        }
        class Rhino extends Animal4 {
            constructor() { super("Rhino"); }
        }
        class Employee {
            constructor(theName) { this.name = theName; }
        }
        let animal = new Animal4("Goat");
        let rhino = new Rhino();
        let employee = new Employee("Bob");
        animal = rhino;
    })(Private || (Private = {}));
    let Protected;
    (function (Protected) {
        class Person {
            constructor(name) { this.name = name; }
        }
        class Employee2 extends Person {
            constructor(name, department) {
                super(name);
                this.department = department;
            }
            getElevatorPitch() {
                return `Hello, my name is ${this.name} and I work in ${this.department}.`;
            }
        }
        let howard = new Employee2("Howard", "Sales");
        console.log(howard.getElevatorPitch());
        class Person2 {
            constructor(theName) { this.name = theName; }
        }
        class Employee3 extends Person2 {
            constructor(name, department) {
                super(name);
                this.department = department;
            }
            getElevatorPitch() {
                return `Hello, my name is ${this.name} and I work in ${this.department}.`;
            }
        }
        let howard2 = new Employee3("Howard", "Sales");
    })(Protected || (Protected = {}));
    let Readonly;
    (function (Readonly) {
        class Octopus {
            constructor(theName) {
                this.numberOfLegs = 8;
                this.name = theName;
            }
            changeName(theName) {
            }
        }
        let dad = new Octopus("Man with the 8 strong legs");
    })(Readonly || (Readonly = {}));
    let Accessors;
    (function (Accessors) {
        const fullNameMaxLength = 10;
        class Employee {
            get fullName() {
                return this._fullName;
            }
            set fullName(newName) {
                if (newName && newName.length > fullNameMaxLength) {
                    throw new Error("fullName has a max length of " + fullNameMaxLength);
                }
                this._fullName = newName;
            }
        }
        let employee = new Employee();
        employee.fullName = "Bob Smith";
        if (employee.fullName) {
            console.log(employee.fullName);
        }
    })(Accessors || (Accessors = {}));
    let StaticProperties;
    (function (StaticProperties) {
        class Grid {
            constructor(scale) {
                this.scale = scale;
            }
            calculateDistanceFromOrigin(point) {
                let xDist = (point.x - Grid.origin.x);
                let yDist = (point.y - Grid.origin.y);
                return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
            }
        }
        Grid.origin = { x: 0, y: 0 };
        let grid1 = new Grid(1.0);
        let grid2 = new Grid(5.0);
        console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
        console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    })(StaticProperties || (StaticProperties = {}));
    let AbstractClasses;
    (function (AbstractClasses) {
        class Animal {
            move() {
                console.log("roaming the earth...");
            }
        }
        class Department {
            constructor(name) {
                this.name = name;
            }
            printName() {
                console.log("Department name: " + this.name);
            }
        }
        class AccountingDepartment extends Department {
            constructor() {
                super("Accounting and Auditing");
            }
            printMeeting() {
                console.log("The Accounting Department meets each Monday at 10am.");
            }
            generateReports() {
                console.log("Generating accounting reports...");
            }
        }
        let department;
        department = new AccountingDepartment();
        department.printName();
        department.printMeeting();
    })(AbstractClasses || (AbstractClasses = {}));
})(Classes || (Classes = {}));
