function fun(fn) {
  console.log("welcome to fun");
  fn();
}
fun(function askingAboutFun() {
  console.log("Wow so much fun");
  console.trace();
});

// for recursive cases named function expression are also helpful
