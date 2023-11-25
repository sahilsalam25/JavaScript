// Array Methods
let num = [1, 2, 3, 34, 4];
let b = num.toString(); // b is now a string 
console.log(b, typeof b);
let c = num.join(" and ");
console.log(c, typeof c);
// let r = num.pop(); // pop returns the popped element
// console.log(num, r);
// let r = num.push(56); // push returns the new array length
// console.log(num, r);
// let r = num.shift();
// console.log(r, num); // Removes an element from the start of the array

let r = num.unshift(78);
console.log(r, num);
console.log(r);

// Array Methods
// Array methods are functions that are called on an array. They can be used to perform operations on the elements of an array. In this lesson, we will learn about some of the most commonly used array methods.

// Arrays come with a bunch of built-in methods that can be used to manipulate the array. Some methods return a new array, while others modify the existing array. It's important to note that these methods do not create a copy of the original array unless explicitly stated. Here are some of the most commonly used array methods:

// toString()
// The toString() method converts an array to a string of comma-separated values. For example, the following code converts the array fruits to a string:

let fruits1 = ["Apple", "Orange", "Banana"];
console.log(fruits1.toString()); // Apple,Orange,Banana
console.log(typeof fruits1.toString()); // string


// join()
// The join() method also converts an array to a string. However, it takes an argument for the separator. For example, the following code converts the array fruits to a string using a hyphen as the separator:

let fruits2 = ["Apple", "Orange", "Banana"];
console.log(fruits2.join("-")); // Apple-Orange-Banana
console.log(typeof fruits2.join("-")); // string


// or lets try " and " as the separator:

// let fruits = ["Apple", "Orange", "Banana"];
// console.log(fruits.join(" and ")); // Apple and Orange and Banana


// pop()
// The pop() method removes the last element from an array and returns that element. For example, the following code removes the last element from the array fruits:

let fruits4 = ["Apple", "Orange", "Banana"];
console.log(fruits4.pop()); // Banana
console.log(fruits4); // ["Apple", "Orange"]


// push()
// The push() method adds one or more elements to the end of an array and returns the new length of the array. For example, the following code adds the string "Pineapple" to the end of the array fruits:

let fruits5= ["Apple", "Orange", "Banana"];
console.log(fruits5.push("Pineapple")); // 4
console.log(fruits5); // ["Apple", "Orange", "Banana", "Pineapple"]


// shift()
// The shift() method removes the first element from an array and returns that element. For example, the following code removes the first element from the array fruits:

let fruits6 = ["Apple", "Orange", "Banana"];
console.log(fruits6.shift()); // Apple
console.log(fruits6); // ["Orange", "Banana"]


// unshift()
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array. For example, the following code adds the string "Pineapple" to the beginning of the array fruits:

let fruits7 = ["Apple", "Orange", "Banana"];
console.log(fruits7.unshift("Pineapple")); // 4
console.log(fruits7); // ["Pineapple", "Apple", "Orange", "Banana"]