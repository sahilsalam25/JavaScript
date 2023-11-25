/*
Practice Set 1
Now that we've covered the basics of JavaScript, it's time to put our knowledge to the test. In this practice set, we'll cover a range of topics from variables to objects.

Q1: Adding numbers to strings
Create a variable of type string and try to add a number to it.

let name = "Sahil";
let age = 25;
console.log(name + age); // "Harry25"


In JavaScript, concatenation is the process of combining two or more strings into a single string. When you use the + operator with a string and a number, the number is automatically converted to a string and then concatenated with the original string. We'll cover more about string concatenation in the future.


Q2: Using typeof
Use the typeof keyword to see the data type of the variables in the previous question.

console.log(typeof name); // "string"
console.log(typeof age); // "number"


When you use the typeof keyword with a variable, it returns a string indicating the data type of that variable. In this case, name is a string, and age is a number.


Q3: Const objects
Create a constant object in JavaScript and then try to change its value to another data type.

const biodata = { 
    name: "Sahil",
    age: 30 
};
biodata = 29; // TypeError: Assignment to constant variable.


When you create a constant in JavaScript, its value cannot be changed. If you try to assign a new value to a constant, you'll get a TypeError.


Q4: Modifying const objects
Try to add a new key to the previous const object.

const biodata = { 
    name: "Sahil", 
    age: 30 
    };
biodata.address = "123 Main St";
console.log(biodata); // { name: "John", age: 30, address: "123 Main St" }


Even though biodata is a constant, we can still modify its properties. This is because the const keyword only prevents us from reassigning the variable to a different value. The object itself is still mutable, which means we can add or change its properties.


Q5: Month dictionary
Create a JavaScript program to make a month dictionary like 1 = January, 2 = February, and so on.

const months = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December"
};

*/



// Chapter 1 - Q1
let a = "Sahil"
let b = 6
console.log(a + b)

// Chapter 1 - Q2
console.log(typeof (a+b))

// Chapter 1 - Q3
const a1 = {
  name: "Sahil",
  section: 1,
  isPrincipal: false
}
// a1 = 45
// a1 = {}

// Chapter 1 - Q4
a1['friend'] = "Zakaur"  
a1['name'] = "Rahman"  
console.log(a1)

// Chapter 1 - Q5
const dict = {
  appreciate: "recognize the full worth of.",
  ataraxia: "a state of freedom from emotional disturbance and anxiety",
  yakka: "work, especially hard work."
}

console.log(dict['yakka'])