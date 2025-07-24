function isEvenOrOdd(x) {
  try {
    if (x % 2 == 0) {
      console.log("Even");
    } else {
      console.lo("Odd");
    }
    console.log("Ending");
  } catch {
    console.log("handled");
  } finally {
    console.log("Finaly");
  }
}

isEvenOrOdd(11);
