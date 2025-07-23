let result = 0;

const calculator = {
  // function to add a number to result
  addNumber: function (num) {
    result += num;
    return this;
  },

  // function to substract a number t result
  substractNumber: function (num) {
    result -= num;
    return this;
  },

  // function to multiply a number to result
  multiplyNumber: function (num) {
    result *= num;
    return this;
  },

  // function to divide a number to result
  divideNumber: function (num) {
    result /= num;
    return this;
  },

  // function to print the value of result
  printResult: function () {
    console.log("Result is :", result);
    return this;
  },
};

const output = calculator
  .addNumber(10)
  .substractNumber(5)
  .multiplyNumber(2)
  .divideNumber(2)
  .printResult();

// Output
// Result is : 5
