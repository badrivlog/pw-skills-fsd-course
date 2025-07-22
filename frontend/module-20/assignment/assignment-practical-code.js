/*******************************************************************************************************/
//Problem 1
//Create a Map in JavaScript and perform the following operations
//- Add key-value pairs to the Map
//- Check if a specific key exists
//- Retrieve the value associated with a given key
//- Iterate through all key-value pairs.
/*******************************************************************************************************/

//Create a Map in JavaScript and perform the following operations
const quizQuestion = new Map([
  ["question", "what is the best programing language in the world ?"],
  [1, "Java"],
  [2, "C++"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, 3],
  ["false", "try again!"],
]);

//- Check if a specific key exists
console.log(quizQuestion.has("question"));

//- Retrieve the value associated with a given key
console.log(quizQuestion.get(3));

//- Iterate through all key-value pairs.
for (const [key, value] of quizQuestion) {
  console.log(key, value);
}

/*******************************************************************************************************/
// Problem 2
// -Create a Map to store contact information (name, age, email, location)
//  and implement a function to retrieve contact details by name
/*******************************************************************************************************/

const userContacts = new Map();
userContacts.set("Baidya", {
  age: 78,
  email: "test1gmail.com",
  city: "kolkata",
});
userContacts.set("Rahul", {
  age: 35,
  email: "test2@gmail.com",
  city: "mumbai",
});
userContacts.set("Ravi", {
  age: 56,
  email: "test3@gmail.com",
  city: "chennai",
});

function getUserContactInfo(name) {
  console.log(userContacts.has(name));
  if (userContacts.has(name)) {
    const contact = userContacts.get(name);
    console.log(
      `Hello My Name is ${name}, I'm ${contact.age} year old from ${contact.city} and here's my email- ${contact.email}`
    );
  }
}

getUserContactInfo("Ravi");

/*******************************************************************************************************/
// Problem 3
// -You are given an array of numbers named myArray.
// -Create a function that takes any number of arguments and adds them to the existing array.
// -Use the spread and rest operator.
/*******************************************************************************************************/

let myArray = [28, 97, 63, 78, 54];

function combineArray(...allInputs) {
  // rest operator
  myArray = [...myArray, ...allInputs]; // spread operator
}

combineArray(11, 37, 90, 33, 59, 62);
console.log(myArray); // Output: [28, 97, 63, 78, 54, 11, 37, 90, 33, 59, 62]

/*******************************************************************************************************/
// Problem 4
// - Create an object car with properties brand, model,
// - and a method displayDetails that prints "Brand: [brand], Model: `[model]`". Test the method using this keyword.
/*******************************************************************************************************/

const car = {
  brand: "Rolls-Royce",
  model: "La Rose Noire Droptail",
  displayDetails() {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
  },
};

car.displayDetails();

/*******************************************************************************************************/
// - Create two objects person1 and person2 with properties name and age.
// - Create a function “introduce” that prints "Hello, I'm [name], and I'm [age] years old."
// - Use the call method to make person2 introduce itself using the introduce function.
/*******************************************************************************************************/

const person1 = {
  name: "Baidyanath",
  age: 88,
};
const person2 = {
  name: "Ravi",
  age: 67,
};

function introduce() {
  console.log(`Hello I'm ${this.name}, and I'm ${this.age} years old`);
}
introduce.call(person1);
introduce.call(person2);

//Output:
// Hello I'm Baidyanth, and I'm 88 years old
// Hello I'm Ravi, and I'm 67 years old

/*******************************************************************************************************/
/**  THE END **/
/*******************************************************************************************************/
