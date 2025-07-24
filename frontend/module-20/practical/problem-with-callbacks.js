/**
 * 1. Inversion of control
 * 2. Callback hell -> readability problem
 */

let arr = [1, 10, 1000, 6, 3, 9, 2, 11];

arr.sort(function cmp(a, b) {
  return a - b;
});

console.log(arr);

function doTask(fn, x) {
  // whole implimentation is done by team A

  fn(x * x); // calling my callback with square of x
} // team A

// here team B tries to use it

doTask(function exec(num) {
  // due to callback, I am passing control of how exec should called to doTask
  // this is inversion of control
  console.log("Wow num is", num);
}, 9);
