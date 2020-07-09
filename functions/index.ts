// # Function Types
namespace FunctionTypes {

  function add(x: number, y: number): number {
    return x + y;
  }

  let myAdd = function(x: number, y: number): number { return x + y; };


  // change arg name is OK
  let myAdd2: (baseValue: number, increment: number) => number =
    function(x: number, y: number): number { return x + y; };

}


// # Optional and Default Parameters #
namespace OptionalParameters {
  function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
  }

  let result1 = buildName("Bob");                  // works correctly now
  let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
  let result3 = buildName("Bob", "Adams");         // ah, just right
}

namespace DefaultParameters {
  function buildName(firstName: string, lastName = 'Smith') {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
  }

  let result1 = buildName("Bob");                  // works correctly now, returns "Bob Smith"
  let result2 = buildName("Bob", undefined);       // still works, also returns "Bob Smith"
  let result3 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
  let result4 = buildName("Bob", "Adams");         // ah, just right
}


// # Rest Parameters
namespace RestParameters {
  function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
  }

  // employeeName will be "Joseph Samuel Lucas MacKinzie"
  let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
}