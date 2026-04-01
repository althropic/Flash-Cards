export const flashcards = [
  {
    id: 1,
    question: "What is the difference between let, const, and var?",
    answer: "var is function-scoped and can be redeclared. let is block-scoped and can be reassigned but not redeclared. const is block-scoped and cannot be reassigned or redeclared."
  },
  {
    id: 2,
    question: "What is a closure in JavaScript?",
    answer: "A closure is a function that retains access to variables from its outer scope even after the outer function has returned. It creates a persistent reference to those variables."
  },
  {
    id: 3,
    question: "What is the difference between == and ===?",
    answer: "The == operator compares values after type coercion, while === compares both value and type without coercion. === is generally preferred as it's more predictable."
  },
  {
    id: 4,
    question: "What is the event loop in JavaScript?",
    answer: "The event loop continuously checks the call stack and task queue. When the stack is empty, it pushes the first task from the queue to the stack, allowing asynchronous operations to execute."
  },
  {
    id: 5,
    question: "What is the difference between null and undefined?",
    answer: "undefined means a variable has been declared but not assigned a value. null is an intentional absence of value, representing 'nothing' or 'empty'."
  },
  {
    id: 6,
    question: "What are arrow functions and how do they differ from regular functions?",
    answer: "Arrow functions are a concise syntax for writing functions. They don't have their own 'this' binding, arguments object, or prototype, making them ideal for callbacks and methods that need lexical 'this'."
  },
  {
    id: 7,
    question: "What is the spread operator (...) used for?",
    answer: "The spread operator expands iterables into individual elements. It's used for copying arrays/objects, merging arrays/objects, and passing elements as function arguments."
  },
  {
    id: 8,
    question: "What is the difference between map() and forEach()?",
    answer: "forEach() executes a function for each element but returns undefined. map() creates a new array with the results of calling a function on every element. Use map() when you need transformed values."
  },
  {
    id: 9,
    question: "What is destructuring in JavaScript?",
    answer: "Destructuring allows you to extract values from arrays or properties from objects into distinct variables. It provides a concise way to unpack values from data structures."
  },
  {
    id: 10,
    question: "What are Promises in JavaScript?",
    answer: "Promises are objects representing the eventual completion or failure of an asynchronous operation. They have three states: pending, fulfilled, and rejected. They enable better handling of async code with .then() and .catch()."
  }
];