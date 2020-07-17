var FirstInterface;
(function (FirstInterface) {
    function printLabel(labeledObj) {
        console.log(labeledObj.label);
    }
    let myObj = { size: 10, label: 'Size 10 Object' };
    printLabel(myObj);
    function printTrueLabel(labeledObj) {
        console.log(labeledObj.label);
    }
    printLabel(myObj);
})(FirstInterface || (FirstInterface = {}));
var OptionalProperties;
(function (OptionalProperties) {
    function createSquare(config) {
        let newSquare = { color: 'white', area: 100 };
        if (config.color) {
            newSquare.color = config.color;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }
        return newSquare;
    }
    let mySquare = createSquare({ color: 'black' });
})(OptionalProperties || (OptionalProperties = {}));
var ReadonlyProperties;
(function (ReadonlyProperties) {
    let p1 = { x: 10, y: 20 };
    let a = [1, 2, 3, 4];
    let ro = a;
    a = ro;
})(ReadonlyProperties || (ReadonlyProperties = {}));
var ExcessPropertyChecks;
(function (ExcessPropertyChecks) {
    function createSquare2(config) {
        return;
    }
    let square = createSquare2({ width: 100, opacity: 0.5 });
})(ExcessPropertyChecks || (ExcessPropertyChecks = {}));
var FunctionTypes;
(function (FunctionTypes) {
    let mySearch;
    mySearch = function (source, subString) {
        let result = source.search(subString);
        return result > -1;
    };
    let mySearch2 = function (src, sub) {
        let result = src.search(sub);
        return result > -1;
    };
    let mySearch3 = function (src, sub) {
        let result = src.search(sub);
        return result > -1;
    };
})(FunctionTypes || (FunctionTypes = {}));
var IndexableTypes;
(function (IndexableTypes) {
    let arrayWithNumberIndex;
    arrayWithNumberIndex = ["Bob", "Fred"];
    let myStr = arrayWithNumberIndex[0];
    let arrayWithStringIndex;
    arrayWithStringIndex = { '0': 'Bob', '1': 'Fred' };
    let myStr2 = arrayWithStringIndex['0'];
})(IndexableTypes || (IndexableTypes = {}));
var ClassType;
(function (ClassType) {
    class Clock {
        constructor(h, m) {
            this.currentTime = new Date();
        }
        setTime(d) {
            this.currentTime = d;
        }
    }
})(ClassType || (ClassType = {}));
var ExtendingInterfaces;
(function (ExtendingInterfaces) {
    let extendedSquare = {};
    extendedSquare.color = "blue";
    extendedSquare.sideLength = 10;
})(ExtendingInterfaces || (ExtendingInterfaces = {}));
var HybridTypes;
(function (HybridTypes) {
    function getCounter() {
        let counter = (function (start) { });
        counter.interval = 123;
        counter.reset = function () { };
        return counter;
    }
    let c = getCounter();
    c(10);
    c.reset();
    c.interval = 5.0;
})(HybridTypes || (HybridTypes = {}));
var InterfacesExtendingClasses;
(function (InterfacesExtendingClasses) {
    class Control {
    }
    class Button extends Control {
        select() { }
    }
    class TextBox extends Control {
        select() { }
    }
})(InterfacesExtendingClasses || (InterfacesExtendingClasses = {}));
