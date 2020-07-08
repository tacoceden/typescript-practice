namespace Classes {
  // # Classes
  class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
  }
  let greeter = new Greeter("world");


  // # Inheritance
  namespace Inheritance {
    class Animal {
      move(distanceInMeters: number = 0) {
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
  }


  // # Public, private, and protected modifiers
  // [PUBLIC]
  // each member is public by default.
  namespace Public {
    class Animal2 { // equals to Animal
      public name: string;
      public constructor(theName: string) { this.name = theName; }
      public move(distanceInMeters: number) {
          console.log(`${this.name} moved ${distanceInMeters}m.`);
      }
    }
  }

  // [PRIVATE]
  // private member can't access from outside of its containing class
  namespace Private {
    // ** ECMAScript Private Fields
    // With TypeScript 3.8, TypeScript supports the new JavaScript syntax for private fields:
    class Animal3 {
      private type: string;
      #name: string;
      constructor(theName: string) { this.#name = theName; }
    }

    // new Animal3("Cat").#name; // Error: Property '#name' is not accessible outside class 'Animal3'
                              // because it has a private identifier.


    // if the types of all members are compatible, then the types themselves are compatible.
    class Animal4 {
      private name: string;
      constructor(theName: string) { this.name = theName; }
    }

    class Rhino extends Animal4 {
        constructor() { super("Rhino"); }
    }

    class Employee {
        private name: string;
        constructor(theName: string) { this.name = theName; }
    }

    let animal = new Animal4("Goat");
    let rhino = new Rhino();
    let employee = new Employee("Bob");

    animal = rhino;
    // animal = employee; // Error: 'Animal' and 'Employee' are not compatible
  }


  // [PROTECTED]
  // members declared protected can also be accessed within deriving classes
  namespace Protected {
    class Person {
      protected name: string;
      constructor(name: string) { this.name = name; }
    }

    class Employee2 extends Person {
        private department: string;

        constructor(name: string, department: string) {
            super(name);
            this.department = department;
        }

        public getElevatorPitch() {
            return `Hello, my name is ${this.name} and I work in ${this.department}.`;
        }
    }

    let howard = new Employee2("Howard", "Sales");
    console.log(howard.getElevatorPitch());
    // console.log(howard.name); // error

    // protected constructor means the class can't be instantiated outside of its containing class
    class Person2 {
      protected name: string;
      protected constructor(theName: string) { this.name = theName; }
    }

    // Employee can extend Person
    class Employee3 extends Person2 {
        private department: string;

        constructor(name: string, department: string) {
            super(name);
            this.department = department;
        }

        public getElevatorPitch() {
            return `Hello, my name is ${this.name} and I work in ${this.department}.`;
        }
    }

    let howard2 = new Employee3("Howard", "Sales");
    // let john = new Person2("John"); // Error: The 'Person' constructor is protected
  }


  // [READONLY]
  // readonly properties must be initialized at their declaration or in the constructor.
  namespace Readonly {
    class Octopus {
      readonly name: string;
      readonly numberOfLegs: number = 8;
      constructor (theName: string) {
          this.name = theName;
      }
      changeName (theName: string) {
        // this.name = theName; // Error: Cannot assign to 'name' because it is a read-only property.
      }
    }
    let dad = new Octopus("Man with the 8 strong legs");
    // dad.name = "Man with the 3-piece suit"; // error! name is readonly.
  }


  // # Accessors
  namespace Accessors {
    const fullNameMaxLength = 10;

    class Employee {
        private _fullName: string;

        get fullName(): string {
            return this._fullName;
        }

        set fullName(newName: string) {
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
  }


  // # Static Properties #
  namespace StaticProperties {
    class Grid {
      static origin = {x: 0, y: 0};
      calculateDistanceFromOrigin(point: {x: number; y: number;}) {
          let xDist = (point.x - Grid.origin.x);
          let yDist = (point.y - Grid.origin.y);
          return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
      }
      constructor (public scale: number) { }
    }

    let grid1 = new Grid(1.0);  // 1x scale
    let grid2 = new Grid(5.0);  // 5x scale

    console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
    console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));
  }


  // # Abstract Classes
  namespace AbstractClasses {
    abstract class Animal {
      abstract makeSound(): void;
      move(): void {
          console.log("roaming the earth...");
      }
    }

    abstract class Department {
      constructor(public name: string) {
      }
      printName(): void {
          console.log("Department name: " + this.name);
      }
      abstract printMeeting(): void; // must be implemented in derived classes
    }

    class AccountingDepartment extends Department {
        constructor() {
            super("Accounting and Auditing"); // constructors in derived classes must call super()
        }
        printMeeting(): void {
            console.log("The Accounting Department meets each Monday at 10am.");
        }
        generateReports(): void {
            console.log("Generating accounting reports...");
        }
    }

    let department: Department; // ok to create a reference to an abstract type
    // department = new Department(); // error: cannot create an instance of an abstract class
    department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
    department.printName();
    department.printMeeting();
    // department.generateReports(); // error: method doesn't exist on declared abstract type
  }
}

