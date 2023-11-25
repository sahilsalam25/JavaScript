// Syntax of JavaScript Functions
// The basic syntax of a function in JavaScript is as follows:

function functionName(parameters) {
  // function code
}


// Example: Simple Function
// Here's an example of a simple function that just prints "Hello, world!" when called:

function sayHello() {
  console.log("Hello, world!");
}
sayHello(); // calling/invoking the function


// Note that if you don't call/invoke the function, nothing will happen.

// Example: Function with Arguments
// Here's an example of a function that takes two numbers, calculates their average, adds 30 to it, and prints the result:

function averageWith30(x, y) {
  let average = (x + y) / 2;
  let result = average + 30;
  console.log(`30 + average of ${x} and ${y} is = ${result}`);
}
averageWith30(5, 10); // calling/invoking the function with arguments


// You can use any variable names instead of x and y.

// One of the advantages of using functions is that if you need to make a change, you only need to do it once in the function code and it will be reflected everywhere you call the function.

// Returning Values
// Functions can also return values using the return keyword. Here's an example of a function that calculates the square of a number and returns the result:

function square(x) {
  return x * x;
}
let result = square(5); // calling/invoking the function and storing the result
console.log(result);


// Note that when a function returns a value, you need to do something with that value, such as store it in a variable or use it in an expression.

// Arrow Functions
// Arrow functions are a shorthand way of writing functions in JavaScript. Here's an example of a simple arrow function that just prints "Hello, world!":

let sayHello2 = () => {
  console.log("Hello, world!");
}
sayHello2(); // calling/invoking the function


// Conclusion
// Functions are an important part of programming and can greatly simplify your code by allowing you to reuse blocks of code and make changes in one place that are reflected everywhere. They can also take arguments and return values, making them versatile and powerful tools for organizing your code.