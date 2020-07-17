var numberIdentity;
(function (numberIdentity) {
    function identity(arg) {
        return arg;
    }
})(numberIdentity || (numberIdentity = {}));
var anyIdentity;
(function (anyIdentity) {
    function identity(arg) {
        return arg;
    }
})(anyIdentity || (anyIdentity = {}));
var genericIdentity;
(function (genericIdentity) {
    function identity(arg) {
        return arg;
    }
    let stringOutput = identity("myString");
    console.log('stringOutput: ', stringOutput);
    let numberOutput = identity(1);
    let autoStringOutput = identity("myString");
    function loggingIdentity(arg) {
        console.log(arg.length);
        return arg;
    }
    function loggingIdentity2(arg) {
        console.log(arg.length);
        return arg;
    }
    let GenericTypes;
    (function (GenericTypes) {
        function identity(arg) {
            return arg;
        }
        let myIdentity = identity;
    })(GenericTypes || (GenericTypes = {}));
})(genericIdentity || (genericIdentity = {}));
