let name0 = "Sahil"
// console.log(name.length)

// console.log(name0.toUpperCase())
// console.log(name0.toLowerCase())
// console.log(name0.slice(2, 4))
// console.log(name0.slice(2))
// console.log(name0.replace("Sahil", "Amir"))
// let friend = "Zakaur"
// console.log(name0.concat(" is a friend of ", friend, " Ok"))
// let friend2 = "      Imaad     "
// console.log(friend2)
// console.log(friend2.trim())
let fr = "Zakaur" + "Imaad" + "Sahil"
console.log(fr[0])
console.log(fr[1])
console.log(fr[2])
console.log(fr[3])
// fr[4]= "o" // This is not possible 
console.log(fr)

// String Methods
// In the last lesson, we discussed what strings are, how to make and use them. Now we will be having a look at some methods of strings by using which you can easily manipulate the strings. Maybe you want to convert your sentence into uppercase, maybe you want to replace a particular word in a sentence, etc. You can do all of this easily with string methods.

// String Length
// The length property of a string returns the number of characters in the string.

let name1 = "Amir";
console.log(name1.length); // Output: 5


// Note that the length property is not a method. It is a property of the string object. You do not need to use parentheses to access it. Here is a table displaying the difference between a method and a property:

// Property	Method
// A property is a value that belongs to an object, such as a string's length or a number's value.	A method is a function that belongs to an object, such as a string's toUpperCase() or an array's push() method.
// You can access a property using dot notation, without using parentheses. For example, string.length returns the length of the string.	You call a method using parentheses, which may or may not take arguments. For example, string.toUpperCase() returns a new string with all characters in uppercase.
// Properties cannot be called like a function, they just return a value. For example, string.length() is not valid.	Methods can be called like a function, and they perform an action on the object they belong to. For example, string.toUpperCase() is valid and returns a new string in uppercase.
// Properties are used to get information about an object.	Methods are used to perform an action on an object.
// toUpperCase() and toLowerCase()
// The toUpperCase() method converts all characters in a string to uppercase, while the toLowerCase() method converts all characters to lowercase. Note: If a string is already in uppercase or lowercase, these methods do nothing and return the original string.

let name2 = "Sahil";
console.log(name2.toUpperCase()); // Output: SAHIL
console.log(name2.toLowerCase()); // Output: sahil


// slice()
// The slice() method returns a section of a string. You can provide two arguments to the method: the starting index and the ending index (not inclusive) of the substring you want to extract.

let name3 = "Sahil";
console.log(name3.slice(2, 4)); // Output: hi
console.log(name3.slice(1, 3)); // Output: ah
console.log(name3.slice(2)); // Output: hil


// If you omit the second argument, slice() will return the remainder of the string starting from the provided index:

console.log(name3.slice(2)); // Output: hil


// replace()
// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement string.

let name4 = "Amir";
console.log(name4.replace("ir", "eer")); // Output: Ameer
console.log(name4.replace("Mir", "meer")); // This will not work because "Mir" is not present in the string
// Note that replace() is case-sensitive.

// trim()
// The trim() method removes whitespace from both ends of a string.

let spacedName = "       Amir        ";
console.log(spacedName.trim()); // Output: Amir


// indexOf()
// The indexOf() method returns the index of the first occurrence of a specified value in a string. This method returns -1 if the value to search for never occurs.

let name_05 = "Sahil";
console.log(name_05.indexOf("h")); // Output: 2
console.log(name_05.indexOf("N")); // This will give -1 because "R" is not present in the string
// Note that indexOf() is case-sensitive.

// Indexing
// You can access individual characters in a string using indexing. In JavaScript, indexing starts at 0.

let name_06 = "Sahil";
console.log(name_06); // Output: Sahil
console.log(name_06[0]); // Output: S
console.log(name_06[1]); // Output: a
console.log(name_06[2]); // Output: h
console.log(name_06[3]); // Output: i
console.log(name_06[4]); // Output: l


// It's important to remember that all string methods return a new string, leaving the original string unchanged. If you want to make changes to a string, you'll need to store the result of the method call in a new variable.
let name_07 = "Sahil";
let upperCaseName = name_07.toUpperCase();
console.log(upperCaseName); // Output: SAHIL
console.log(name_07); // Output: Harry (original string is unchanged)


// These are some of the most important string methods.