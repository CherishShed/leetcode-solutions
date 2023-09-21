type Fn = (...params: number[]) => number;

function memoize(fn: Fn): Fn {
  let resArray: any = {};
  return function (...args) {
    const key = JSON.stringify(args);

    if (key in resArray) {
      return resArray[key];
    }
    const result = fn(...args);
    resArray[key] = result;

    return result;
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
memoizedFn(2, 3); // 5
console.log(memoizedFn(2, 3)); // 5
console.log(callCount); // 1
