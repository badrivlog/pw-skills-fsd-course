function blocking_for_loop() {
  for (let i = 0; i < 10000000000; i++) {
    // do something
  }
}

console.log("start of the file");

setTimeout(function () {
  console.log("timer 1 done");
}, 0);

blocking_for_loop();
let x = Promise.resolve("Baidya's Promise1");
x.then(function proccesPromise(value) {
  console.log("whose promise: " + value);
  //   blocking_for_loop();
  for (let i = 0; i < 10000000000; i++) {
    // do something
  }
});

let y = Promise.resolve("Baidya's Promise2");
y.then(function proccesPromise(value) {
  console.log("whose promise: " + value);
  setTimeout(() => console.log("ok done"), 0);
});

let z = Promise.resolve("Baidya's Promise3");
z.then((value) => console.log("whose promise: " + value));

setTimeout(() => console.log("Timer 2 done"));

console.log("end of the file");
