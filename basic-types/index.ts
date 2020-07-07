// Boolean
let f: boolean = false;
let t: boolean = true;


// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let nan:number = NaN;


// String
let color: string = 'blue';
color = 'red';

let fullName: string = `Eden`;
let age: number = 18;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;
console.log('sentence: ', sentence);


// Array
let primitiveArray: number[] = [1, 2, 3];
let genericArray: Array<number> = [1, 2, 3];


// ** Tuple
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error
console.log(` x[0] is string: ${typeof x[0] === 'string'}`);
console.log(` x[1] is number: ${typeof x[1] === 'number'}`);
// x[3] = 1; // Error, Property '3' does not exist on type '[string, number]'.


// Enum (Enumeration)
enum Color { Red, Green, Blue };
let green: Color = Color.Green;
console.log('green: ', green);

enum Color2 { Red = 1, Green = 2, Blue = 4 };
let blue: Color = Color.Blue;
console.log('blue: ', blue);


let greenColorName: string = Color2[2];
console.log('greenColorName: ', greenColorName);


// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.


// Void
function warnUser(): void {
  console.log("This is my warning message");
  // return 'something'; // Error: Type '"something"' is not assignable to type 'void'.
}

// Declaring variables of type void is not useful, can only assign null* or undefined.
let unusable: void = undefined;
unusable = null; // OK if `--strictNullChecks` is not given


// Null and Undefined
let u: undefined = undefined;
let n: null = null;


// Never
// Function returning never must have unreachable end point
function error(message: string): never {
  throw new Error(message);
}

// Inferred return type is never
function fail(): never {
  return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
  while (true) {
  }
}


// Object
// anything that is not number, string, boolean, bigint, symbol, null, or undefined.
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error


// Type assertions
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;