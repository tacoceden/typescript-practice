// # Numeric enums
namespace NumericEnums {
  enum CustomizedStartOrderedDirection {
    Up = 1,
    Down,
    Left,
    Right
  }

  console.log('CustomizedStartOrderedDirection.Up: ', CustomizedStartOrderedDirection.Up);
  console.log('CustomizedStartOrderedDirection.Down: ', CustomizedStartOrderedDirection.Down);
  console.log('CustomizedStartOrderedDirection.Left: ', CustomizedStartOrderedDirection.Left);
  console.log('CustomizedStartOrderedDirection.Right: ', CustomizedStartOrderedDirection.Right);


  enum CustomizedOrderedNotFromFirstDirection {
    Up,
    Down = 3,
    Left,
    Right
  }

  console.log('CustomizedOrderedNotFromFirstDirection.Up: ', CustomizedOrderedNotFromFirstDirection.Up);
  console.log('CustomizedOrderedNotFromFirstDirection.Down: ', CustomizedOrderedNotFromFirstDirection.Down);
  console.log('CustomizedOrderedNotFromFirstDirection.Left: ', CustomizedOrderedNotFromFirstDirection.Left);
  console.log('CustomizedOrderedNotFromFirstDirection.Right: ', CustomizedOrderedNotFromFirstDirection.Right);
}


// # String enums
namespace StringEnums {
  enum StringDirection {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
  }
  console.log('StringDirection.Up: ', StringDirection.Up);
  console.log('StringDirection.Down: ', StringDirection.Down);
  console.log('StringDirection.Left: ', StringDirection.Left);
  console.log('StringDirection.Right: ', StringDirection.Right);
}


// # Heterogeneous enums
namespace HeterogeneousEnums {
  enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}
  console.log('BooleanLikeHeterogeneousEnum.No: ', BooleanLikeHeterogeneousEnum.No);
  console.log('BooleanLikeHeterogeneousEnum.Yes: ', BooleanLikeHeterogeneousEnum.Yes);
}