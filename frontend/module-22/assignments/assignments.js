/***************************************************************************************************/
/*
Q1: Understanding Arrow Functions & Lexical this
Consider the following code and predict the output. Explain why the behavior occurs.
/***************************************************************************************************/

const person = {
  name: "Alice",
  greet: function () {
    console.log(this.name);
    setTimeout(() => {
      console.log(`Hello my name is ${this.name}`);
    }, 1000);
  },
};

person.greet();

/*
- Arrow function does not have it's own this context, instead it will simply use this context
  of parent scope or lexical scope.
- And in this case, that will be the greet method, and here the this context is person object
- And therefore then here in an arrow function, that would also be the this context.
- Then it is going to work as expected, because the arrow function defined in the setTimeout uses
  the this context from it's lexical scope.
- So basically an arrow function inherits the this context from the parent or lexical scope.

/***************************************************************************************************/
// Q2: Convert Traditional Functions to Arrow Functions
// Rewrite the following function using arrow functions without changing the behavior:
/*
function multiply(a, b) {
  return a * b;
}
const obj = {
  value: 10,
  add: function (num) {
    return this.value + num;
  },
};
console.log(multiply(5, 3));
console.log(obj.add(5));
/***************************************************************************************************/

const multiply = (a, b) => a * b;
const obj = {
  value: 10,
  add: (num) => {
    return this.value + num;
  },
};
console.log(obj.add(5)); // output: NaN
/*
  - In the multiply object an add menthod defined in the global scope, because it is defined in the object literals.
  - Arrow function does not have its own this context.
  - Then inside of the add method this constext is window object, and in the
    window object the this.value will be undefined.
  - So here this.value will be undefined
    and the add method return value will be NaN(Not a Number).


/***************************************************************************************************/
/*
Q3: Handling Errors in Async-Await (Try-Catch Required)
 Modify the following function to use async-await and proper error handling (try-catch).
 Original Code (With Promise):

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = Math.random() > 0.5;
      success ? resolve("Data received") : reject("Error fetching data");
    }, 2000);
  });
}

fetchData().then(console.log).catch(console.error);
/***************************************************************************************************/

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = Math.random() > 0.5;
      success
        ? resolve("Data received")
        : reject(new Error("Error fetching data"));
    }, 2000);
  });
}

async function handleFetchData() {
  try {
    const data = await fetchData();
    console.log(data); // Output: Data received
  } catch (err) {
    console.error(err.message); // Output: Error fetching data
  }
}

handleFetchData();

/***************************************************************************************************/
/*
Q4: Async Function with Multiple Await Calls
Write an async function that:

1. Fetches user data after 1 second.
2. Fetches order details after 2 seconds.
3. Fetches payment status after 3 seconds.
4. Logs the final "Order completed" message.
5. Use await to ensure each step executes sequentially.
/***************************************************************************************************/

function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User data fetched");
    }, 1000);
  });
}

function fetchOrderDetails() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Order details fetched");
    }, 2000);
  });
}

function fetchPaymentStatus() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Payment status fetched");
    }, 3000);
  });
}

async function processOrder() {
  try {
    const user = await fetchUserData();
    console.log(user); //Output: User data fetched

    const order = await fetchOrderDetails();
    console.log(order); // Output: Order details fetched

    const payment = await fetchPaymentStatus();
    console.log(payment); // Output: Payment status fetched

    console.log("Order completed");
  } catch (error) {
    console.error("Error processing order:", error);
  }
}

processOrder();

/***************************************************************************************************/
/*
Q5: Handling Synchronous Errors with try-catch
- Write a function that:
1. Accepts a string input.
2. Converts it to a number and returns its square.
3. Uses try-catch to handle cases where the input is not a valid number.
4. If the error occurs, return "Invalid Input" instead of crashing.
/***************************************************************************************************/

function makeSquare(val) {
  try {
    const num = Number(val);

    if (isNaN(num)) {
      throw new Error("Not a valid number");
    }

    return num * num;
  } catch (err) {
    return `${val} is an invalid input, ${err}`;
  }
}

console.log(makeSquare(5)); // Output: 25
console.log(makeSquare("hello")); // Output: hello is an invalid input, Error: Not a valid number
console.log(makeSquare(undefined)); // Output: undefined is an invalid input, Error: Not a valid number
