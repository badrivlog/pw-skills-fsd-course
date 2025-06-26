function timeConsumingLoop() {
  console.log("Starting a time-consuming loop...");
  for (let i = 0; i < 100000000; i++) {
    // Time consuming loop
  }
  console.log("Time-consuming loop completed.");
}

function timeConsumingByRunTimeFeature() {
  console.log("Starting a time-consuming task with run-time feature...");
  setTimeout(function () {
    console.log("completed time-consuming task with run-time feature.");
  }, 2000);
}

console.log("hi");

timeConsumingLoop();
timeConsumingByRunTimeFeature();
timeConsumingLoop();

console.log("bye");
