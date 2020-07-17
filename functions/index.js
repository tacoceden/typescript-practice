var FunctionTypes;
(function (FunctionTypes) {
    function add(x, y) {
        return x + y;
    }
    let myAdd = function (x, y) { return x + y; };
    let myAdd2 = function (x, y) { return x + y; };
})(FunctionTypes || (FunctionTypes = {}));
var OptionalParameters;
(function (OptionalParameters) {
    function buildName(firstName, lastName) {
        if (lastName)
            return firstName + " " + lastName;
        else
            return firstName;
    }
    let result1 = buildName("Bob");
    let result3 = buildName("Bob", "Adams");
})(OptionalParameters || (OptionalParameters = {}));
var DefaultParameters;
(function (DefaultParameters) {
    function buildName(firstName, lastName = 'Smith') {
        if (lastName)
            return firstName + " " + lastName;
        else
            return firstName;
    }
    let result1 = buildName("Bob");
    let result2 = buildName("Bob", undefined);
    let result4 = buildName("Bob", "Adams");
})(DefaultParameters || (DefaultParameters = {}));
var RestParameters;
(function (RestParameters) {
    function buildName(firstName, ...restOfName) {
        return firstName + " " + restOfName.join(" ");
    }
    let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
})(RestParameters || (RestParameters = {}));
