let num = [3, 5, 1, 2, 4];

// for(let i=0; i<num.length;i++){
//   console.log(num[i])
// }

// ForEach Loop
num.forEach((element) => {
  console.log(element * element);
})

// Array.from 
let name1 = "Harry";
let arr = Array.from(name1);
console.log(arr);

// for...of 
for (let item of num){
  console.log(item);
}

// for...in
for (let i in num){
  console.log(num[i]);
}

// Loops with Arrays
// lets start with a simple example. The following code uses a for loop to print all the elements of the array fruits:

let fruits1 = ["Apple", "Orange", "Banana"];
for (let i = 0; i < fruits1.length; i++) {
    console.log(fruits1[i]);
}


// In the above code, the for loop starts at index 0 and keeps incrementing the index until it reaches the end of the array. The length property of the array returns the number of elements in the array. The for loop will stop when the index is equal to the length of the array.

// forEach()
// The above code can be rewritten using the forEach() method. The forEach() method executes a provided function once for each array element. For example, the following code uses the forEach() method to print all the elements of the array fruits:

let fruits2 = ["Apple", "Orange", "Banana"];
fruits2.forEach((i) => {
    console.log(i);
});


// In the above code, the forEach() method takes a callback function as an argument. The callback function takes the current element as an argument. The forEach() method will call the callback function once for each element in the array.

// from()
// The from() method creates a new array from an array-like object. For example, the following code creates a new array from a string:

let str1 = "Hello";
let arr1 = Array.from(str);
console.log(arr1); // ["H", "e", "l", "l", "o"]


// In the above code, the from() method takes a string as an argument. The from() method creates a new array from the string. The new array contains the characters of the string.

// for...of
// The for...of statement creates a loop iterating over iterable objects. For example, the following code uses the for...of statement to print all the elements of the array fruits:

let fruits3 = ["Apple", "Orange", "Banana"];
for (let i of fruits3) {
    console.log(i);
}


// In the above code, the for...of statement iterates over the array fruits. The for...of statement will stop when it reaches the end of the array.

// for...in
// The for...in statement creates a loop iterating over enumerable properties of an object. For example, the following code uses the for...in statement to print all the elements of the array fruits:

let fruits_4 = ["Apple", "Orange", "Banana"];
for (let i in fruits4) {
    console.log(fruits4[i]);
}


// In the above code, the for...in statement iterates over the array fruits. The for...in statement will stop when it reaches the end of the array. In objects, the for...in loop gives you the keys of the object and array is an object too. The keys in arrays are the indexes of the elements. So, the for...in loop will iterate over the indexes of the array and print the elements of the array.