function timeConsumingLoop() {
  console.log("Starting a time-consuming loop...");
  for (let i = 0; i < 10000000000; i++) {
    // Time consuming loop
  }
  console.log("Time-consuming loop completed.");
}

function timeConsumingByRunTimeFeature1() {
  console.log("Starting a time-consuming task with run-time feature-1");
  setTimeout(function () {
    console.log("completed time-consuming task with run-time feature-1.");
  }, 5000); // 5 sec timer
}
function timeConsumingByRunTimeFeature2() {
  console.log("Starting a time-consuming task with run-time feature-2");
  setTimeout(function () {
    console.log("completed time-consuming task with run-time feature-2.");
  }, 0); // 0
}
function timeConsumingByRunTimeFeature3() {
  console.log("Starting a time-consuming task with run-time feature-3");
  setTimeout(function () {
    console.log("completed time-consuming task with run-time feature-3.");
  }, 200); // 200 ms timer
}

console.log("hi");

timeConsumingLoop();
timeConsumingByRunTimeFeature1();
timeConsumingByRunTimeFeature2();
timeConsumingByRunTimeFeature3();
timeConsumingLoop();

console.log("bye");
