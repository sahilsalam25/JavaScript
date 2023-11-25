// Practice Set-04
// Problem 1
let str1 = "Sah\"";
console.log(str1.length);

// Problem 2
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox2';
console.log(sentence.includes(word));
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

// Problem 3
console.log(word.toLowerCase());
console.log(word.toUpperCase());

// Problem 4
let str2 = "Please give Rs 1000";
let amount = Number.parseInt(str2.slice(15));
console.log(amount);
console.log(typeof amount);

// Problem 5
let friend = "Zakaur";
friend[3] = "R";
console.log(friend); // friend is not changed, because string is immutable

// Practice Set 4
// Question 1
// What will the following code print in JavaScript?

console.log("sah\"".length);


// The above code will print 4 because the escape sequence \ is not counted as a character in the string. Therefore, the length of the string "sah\"" is actually 4, not 5.


// Question 2
// Explore the includes, startsWith, and endsWith functions in a string.

let str3 = "Hello World";
console.log(str3.includes("Hello")); // true
console.log(str3.startsWith("Hello")); // true
console.log(str3.endsWith("World")); // true
console.log(str3.includes("harry")); // false
console.log(str3.startsWith("new")); // false
console.log(str3.endsWith("new")); // false


// The includes method returns true if the string includes the specified substring, otherwise it returns false. The startsWith method returns true if the string starts with the specified substring, otherwise it returns false. The endsWith method returns true if the string ends with the specified substring, otherwise it returns false.


// Question 3
// Write a program to convert a given string into lowercase.

let str4 = "Hello World";
console.log(str4.toLowerCase());


// The toLowerCase method returns the calling string value converted to lower case.


// Question 4
// Extract the numerical amount from this string "Total: Rupees 2907".

let str5 = "Total: Rupees 2907";
console.log(str5.slice(13));


// The slice method extracts a section of a string and returns it as a new string, without modifying the original string. The slice method takes two arguments, the starting index and the ending index (end not included). If the ending index is not specified, it will slice the string till the end.


// Question 5
// Try to change the 4th character of a given string. Would you be able to do it?

let str = "Hello World";
str[3] = "z"; // 3rd index is 4th character 
console.log(str); // Hello World | No change


// Strings are immutable in JavaScript. This means that strings cannot be changed, only replaced. Therefore, the above code will not change the string.

