// higher order function ->  there functions which take another function as arguments
// these are called higher order function

function f(x, fn) {
  /**
   * x -> number
   * fn -> function
   **/
  console.log(x);
  console.log(fn);
  fn();
}

f(10, function exec() {
  console.log("i am an expression passed to a higher order function");
});

let arr = [1, 10, 9, 100, 1000, 11, 12, 13, 14, 2, 4, 3];
arr.sort(); // it sorts the given array // [expectation] -> this arrang elements in inc order
// default implementation of arr.sort() is going to sort my array in lexicographical order
/**
 * 0 -> A
 * 1 -> B
 * 2 -> C
 * 3 -> D
 * 4 -> E
 * 5 -> F
 * 6 -> G
 * 7 -> H
 * 8 -> I
 * 9 -> J
 * [B, BA, 3, BAA, BAAA, BB]
 */
console.log(arr);

// sort arr2 in increasing order
let arr2 = [1, 10, 9, 100, 1000, 11, 12, 13, 14, 2, 4, 3];

arr2.sort(function cmp(a, b) {
  return a - b; // if a < b -> a - b will be negative -> if cmp function gives negative then a placed before b
  // if a > b -> a -b will be positive -> if cmp function gives positive then b will placed before a (b < a)
}); // sort is a HOF, the sort function takes a comparator function as argument

console.log(arr2);
