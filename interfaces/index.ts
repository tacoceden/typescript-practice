// # First Interface
function printLabel(labeledObj: { label: string }) {
  console.log(labeledObj.label);
}

let myObj = {size: 10, label: 'Size 10 Object'};
printLabel(myObj);

// use interface to replace labeledObj

interface LabeledValue {
  label: string;
}

function printTrueLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

printLabel(myObj);


// # Optional Properties
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = {color: 'white', area: 100};
  if (config.color) {
      newSquare.color = config.color;
  }
  // if (config.colr) { // Error: Property 'colr' does not exist on type 'SquareConfig'
  //     newSquare.color = config.color;
  // }
  if (config.width) {
      newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({color: 'black'});


// # Readonly properties
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // Error: Cannot assign to 'x' because it is a read-only property.

// ReadonlyArray<T>
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro.push(5); // Error: Property 'push' does not exist on type 'readonly number[]'.


// override with type assertion
a = ro as number[];


// # Excess Property Checks
interface SquareConfig2 {
  color?: string;
  width?: number;
}

function createSquare2(config: SquareConfig2): { color: string; area: number } {
  return;
}

// let mySquare2 = createSquare2({ colour: "red", width: 100 });
// Error:
// Argument of type '{ colour: string; width: number; }' is not assignable to parameter of type 'SquareConfig'.
// Object literal may only specify known properties, but 'colour' does not exist in type 'SquareConfig'. Did you mean to write 'color'?

// use type assertion
let square = createSquare2({ width: 100, opacity: 0.5 } as SquareConfig2);

// Define any number of other properties
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}


// # Function Types
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}

// can change the parameter name
let mySearch2: SearchFunc = function(src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
}

// TypeScript’s contextual typing can infer the argument types
let mySearch3: SearchFunc = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
    // return 'string';
    // Error: Type '(src: string, sub: string) => string' is not assignable to type 'SearchFunc'.
    // Type 'string' is not assignable to type 'boolean'.
}



// # Indexable Types
interface StringArray {
  [index: number]: string;
}

let arrayWithNumberIndex: StringArray;
arrayWithNumberIndex = ["Bob", "Fred"];

let myStr: string = arrayWithNumberIndex[0];

interface StringArray2 {
  [index: string]: string;
}

let arrayWithStringIndex: StringArray2;
arrayWithStringIndex = { '0': 'Bob','1': 'Fred' };

let myStr2: string = arrayWithStringIndex['0'];


interface NumberDictionary {
  [index: string]: number;
  length: number;    // ok, length is a number
  // name: string;      // Error: Property 'name' of type 'string' is not
                     // assignable to string index type 'number'.
}

interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number;    // ok, length is a number
  name: string;      // ok, name is a string
}


// # Class Types
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date) {
      this.currentTime = d;
  }
  constructor(h: number, m: number) { }
}


// # Extending Interfaces
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let extendedSquare = {} as Square;
extendedSquare.color = "blue";
extendedSquare.sideLength = 10;


// # Hybrid Types
interface Counter { // a function with properties
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = (function (start: number) { }) as Counter;
  counter.interval = 123;
  counter.reset = function () { };
  return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;


// # Interfaces Extending Classes
class Control {
  private state: any;
}

interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select() { }
}

class TextBox extends Control {
  select() { }
}

// Error: Property 'state' is missing in type 'Image'.
// class Image2 implements SelectableControl {
//   private state: any;
//   select() { }
// }