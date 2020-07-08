let f = false;
let t = true;
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
let nan = NaN;
let color = 'blue';
color = 'red';
let fullName = `Eden`;
let age = 18;
let sentence = `Hello, my name is ${fullName}.

I'll be ${age + 1} years old next month.`;
console.log('sentence: ', sentence);
let primitiveArray = [1, 2, 3];
let genericArray = [1, 2, 3];
let x;
x = ["hello", 10];
console.log(` x[0] is string: ${typeof x[0] === 'string'}`);
console.log(` x[1] is number: ${typeof x[1] === 'number'}`);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
let green = Color.Green;
console.log('green: ', green);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
;
let blue = Color.Blue;
console.log('blue: ', blue);
let greenColorName = Color2[2];
console.log('greenColorName: ', greenColorName);
let notSure = 4;
notSure = "maybe a string instead";
notSure = false;
notSure.ifItExists();
notSure.toFixed();
let prettySure = 4;
function warnUser() {
    console.log("This is my warning message");
}
let unusable = undefined;
unusable = null;
let u = undefined;
let n = null;
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("Something failed");
}
function infiniteLoop() {
    while (true) {
    }
}
create({ prop: 0 });
create(null);
let someValue = "this is a string";
let strLength = someValue.length;
let strLength2 = someValue.length;
