let arr = [45, 23, 21];
// Array map method
let a = arr.map((value, index, array) => {
  // console.log(value, index, array)
  return value + index;
})
// console.log(arr)

// Array filter method
let arr2 = [45, 23, 21, 0, 3, 5];
let a2 = arr2.filter((a) => {
  return a < 10;
})
// console.log(a2, arr2)

// Array reduce method
let arr3 = [1, 2, 3, 5, 2, 1];
const reduce_func = (h1, h2) => {
  return h1 + h2;
}
let newarr3 = arr3.reduce(reduce_func);
console.log(newarr3);

// Lets continue our journey and keep exploring more about the arrays. In this lesson, we will learn about the map(), filter(), and reduce() methods. These methods are used to transform the elements of an array. The map(), filter(), and reduce() methods are very useful and are used in many real-world applications. Lets start with the map() method.

// 1-map()
// The map() method creates a new array with the results of calling a provided function on every element in the calling array. For example, the following code uses the map() method to double the elements of the array numbers:

let numbers_1 = [1, 2, 3, 4, 5];
let doubledNumbers = numbers_1.map((i) => {
    return i * 2;
});
console.log(doubledNumbers); // [2, 4, 6, 8, 10]


// In the above code, the map() method takes a callback function as an argument. The callback function takes the current element as an argument. The map() method will call the callback function once for each element in the array. The callback function returns the new value of the element. The map() method creates a new array with the new values returned by the callback function. The new array is assigned to the variable doubledNumbers.

// The map() method is very useful when you want to transform the elements of an array. For example, the following code uses the map() method to convert the elements of the array numbers to strings:

let numbers3 = [1, 2, 3, 4, 5];
let stringNumbers = numbers3.map((i) => {
    return i.toString();
});
console.log(stringNumbers); // ["1", "2", "3", "4", "5"]


// In the above code, the map() method takes a callback function as an argument. The callback function takes the current element as an argument. The map() method will call the callback function once for each element in the array. The callback function returns the new value of the element. The map() method creates a new array with the new values returned by the callback function. The new array is assigned to the variable stringNumbers.

// It is important to note that the map() method does not change the original array. The map() method creates a new array with the new values returned by the callback function. The original array remains unchanged.

// 2-filter()
// The filter() is a really interesting and easy method, it creates a new array with all elements that pass the test implemented by the provided function. For example, the following code uses the filter() method to filter out the numbers greater than 3 from the array numbers:

let numbers4 = [1, 2, 3, 4, 5];
let filteredNumbers = numbers4.filter((i) => {
    return i > 3;
});
console.log(filteredNumbers); // [4, 5]


// In the above code, the filter() method takes a callback function as an argument. The callback function takes the current element as an argument. The filter() method will call the callback function once for each element in the array. The callback function returns a boolean value. If the callback function returns true, the current element will be added to the new array. If the callback function returns false, the current element will be ignored. The filter() method creates a new array with the elements that passed the test. The new array is assigned to the variable filteredNumbers.

// 3-reduce()
// The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. For example, the following code uses the reduce() method to sum the elements of the array numbers:

let numbers5 = [1, 2, 3, 4, 5];
let sum = numbers5.reduce((first, second) => {
    return first + second;
});
console.log(sum); // 15


// In the above code, the reduce() method takes a callback function as an argument. The callback function takes two arguments, the first argument is the accumulator and the second argument is the current element. The reduce() method will call the callback function once for each element in the array. The callback function returns the new value of the accumulator. The reduce() method returns the final value of the accumulator. The final value of the accumulator is assigned to the variable sum.