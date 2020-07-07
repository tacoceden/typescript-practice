var f = false;
var t = true;
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
var nan = NaN;
var color = 'blue';
color = 'red';
var fullName = "Eden";
var age = 18;
var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
console.log('sentence: ', sentence);
var primitiveArray = [1, 2, 3];
var genericArray = [1, 2, 3];
var x;
x = ["hello", 10];
console.log(" x[0] is string: " + (typeof x[0] === 'string'));
console.log(" x[1] is number: " + (typeof x[1] === 'number'));
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var green = Color.Green;
console.log('green: ', green);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
;
var blue = Color.Blue;
console.log('blue: ', blue);
var greenColorName = Color2[2];
console.log('greenColorName: ', greenColorName);
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
notSure.ifItExists();
notSure.toFixed();
var prettySure = 4;
function warnUser() {
    console.log("This is my warning message");
}
var unusable = undefined;
unusable = null;
var u = undefined;
var n = null;
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
var someValue = "this is a string";
var strLength = someValue.length;
var strLength2 = someValue.length;
