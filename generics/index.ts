namespace numberIdentity {
  function identity(arg: number): number {
    return arg;
  }
}

namespace anyIdentity {
  function identity(arg: any): any {
    return arg;
  }
}

namespace genericIdentity {
  function identity<T>(arg: T): T {
    return arg;
  }


  let stringOutput = identity<string>("myString");  // type of output will be 'string'
  console.log('stringOutput: ', stringOutput);

  let numberOutput = identity<number>(1);  // type of output will be 'string'

  let autoStringOutput = identity("myString");  // type of output will be 'string'




  // set
  function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
  }

  function loggingIdentity2<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
  }



  namespace GenericTypes {
    function identity<T>(arg: T): T {
      return arg;
    }

    // can use different type variables
    let myIdentity: <U>(arg: U) => U = identity;
    }


}

