var NumericEnums;
(function (NumericEnums) {
    let CustomizedStartOrderedDirection;
    (function (CustomizedStartOrderedDirection) {
        CustomizedStartOrderedDirection[CustomizedStartOrderedDirection["Up"] = 1] = "Up";
        CustomizedStartOrderedDirection[CustomizedStartOrderedDirection["Down"] = 2] = "Down";
        CustomizedStartOrderedDirection[CustomizedStartOrderedDirection["Left"] = 3] = "Left";
        CustomizedStartOrderedDirection[CustomizedStartOrderedDirection["Right"] = 4] = "Right";
    })(CustomizedStartOrderedDirection || (CustomizedStartOrderedDirection = {}));
    console.log('CustomizedStartOrderedDirection.Up: ', CustomizedStartOrderedDirection.Up);
    console.log('CustomizedStartOrderedDirection.Down: ', CustomizedStartOrderedDirection.Down);
    console.log('CustomizedStartOrderedDirection.Left: ', CustomizedStartOrderedDirection.Left);
    console.log('CustomizedStartOrderedDirection.Right: ', CustomizedStartOrderedDirection.Right);
    let CustomizedOrderedNotFromFirstDirection;
    (function (CustomizedOrderedNotFromFirstDirection) {
        CustomizedOrderedNotFromFirstDirection[CustomizedOrderedNotFromFirstDirection["Up"] = 0] = "Up";
        CustomizedOrderedNotFromFirstDirection[CustomizedOrderedNotFromFirstDirection["Down"] = 3] = "Down";
        CustomizedOrderedNotFromFirstDirection[CustomizedOrderedNotFromFirstDirection["Left"] = 4] = "Left";
        CustomizedOrderedNotFromFirstDirection[CustomizedOrderedNotFromFirstDirection["Right"] = 5] = "Right";
    })(CustomizedOrderedNotFromFirstDirection || (CustomizedOrderedNotFromFirstDirection = {}));
    console.log('CustomizedOrderedNotFromFirstDirection.Up: ', CustomizedOrderedNotFromFirstDirection.Up);
    console.log('CustomizedOrderedNotFromFirstDirection.Down: ', CustomizedOrderedNotFromFirstDirection.Down);
    console.log('CustomizedOrderedNotFromFirstDirection.Left: ', CustomizedOrderedNotFromFirstDirection.Left);
    console.log('CustomizedOrderedNotFromFirstDirection.Right: ', CustomizedOrderedNotFromFirstDirection.Right);
})(NumericEnums || (NumericEnums = {}));
var StringEnums;
(function (StringEnums) {
    let StringDirection;
    (function (StringDirection) {
        StringDirection["Up"] = "UP";
        StringDirection["Down"] = "DOWN";
        StringDirection["Left"] = "LEFT";
        StringDirection["Right"] = "RIGHT";
    })(StringDirection || (StringDirection = {}));
    console.log('StringDirection.Up: ', StringDirection.Up);
    console.log('StringDirection.Down: ', StringDirection.Down);
    console.log('StringDirection.Left: ', StringDirection.Left);
    console.log('StringDirection.Right: ', StringDirection.Right);
})(StringEnums || (StringEnums = {}));
var HeterogeneousEnums;
(function (HeterogeneousEnums) {
    let BooleanLikeHeterogeneousEnum;
    (function (BooleanLikeHeterogeneousEnum) {
        BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No"] = 0] = "No";
        BooleanLikeHeterogeneousEnum["Yes"] = "YES";
    })(BooleanLikeHeterogeneousEnum || (BooleanLikeHeterogeneousEnum = {}));
    console.log('BooleanLikeHeterogeneousEnum.No: ', BooleanLikeHeterogeneousEnum.No);
    console.log('BooleanLikeHeterogeneousEnum.Yes: ', BooleanLikeHeterogeneousEnum.Yes);
})(HeterogeneousEnums || (HeterogeneousEnums = {}));
