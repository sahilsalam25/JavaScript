// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
// let num_even_more = [211, 212, 213, 214, 415, 416, 417, 418, 419]
// console.log(num.length)
// delete num[0]
// console.log(num.length)

// let newArray = num.concat(num_more, num_even_more)
// console.log(newArray)
// console.log(num, num_more)

// sort method
// let compare = (a, b)=>{
//   return b - a
// }
// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// num.sort(compare)
// num.reverse()
// console.log(num)

// Splice and Slice
let num = [551, 22, 3, 14, 5, 6, 7, 8, 229];
// let deletedValues = num.splice(2, 4, 1021, 1022, 1023, 1024, 1025)
// console.log(num)
// console.log(deletedValues)

// let newNum = num.slice(3)
let newNum = num.slice(3, 5);
console.log(newNum);

// More Array Methods
// In the previous , we learned some common array methods, lets explore some more of the most commonly used array methods in this lesson.

// delete()
// The delete() method removes the element at the specified index from an array. For example, the following code removes the element at index 1 from the array fruits:

let fruits = ["Apple", "Orange", "Banana"];
delete fruits[1];
console.log(fruits); // ["Apple", <1 empty item>, "Banana"]


// Note that the delete() method does not change the length of the array. It simply removes the element at the specified index and replaces it with an empty item. Also, the delete() method does not return the removed element like the pop() method.

// concat()
// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array. For example, the following code merges the arrays fruits and vegetables:

let fruits1 = ["Apple", "Orange", "Banana"];
let vegetables = ["Potato", "Tomato", "Onion"];
let food = fruits1.concat(vegetables);
console.log(food); // ["Apple", "Orange", "Banana", "Potato", "Tomato", "Onion"]


// The concat() method can also be used to add items to an existing array. For example, the following code adds the string "Pineapple" to the array fruits:

let fruits2 = ["Apple", "Orange", "Banana"];
let food2 = fruits2.concat("Pineapple");
console.log(food2); // ["Apple", "Orange", "Banana", "Pineapple"]


// You can concatenate as many arrays as you want and the concat() method will merge them all into a single array.

// Its also possible to add multiple items to an array using the concat() method. For example, the following code adds the strings "Pineapple" and "Mango" to the array fruits:

let fruits3= ["Apple", "Orange", "Banana"];
let food3 = fruits3.concat("Pineapple", "Mango");
console.log(food3); // ["Apple", "Orange", "Banana", "Pineapple", "Mango"]


// sort()
// The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values. For example, the following code sorts the array fruits:

let fruits4 = ["Banana", "Orange", "Apple"];
fruits4.sort();
console.log(fruits4); // ["Apple", "Banana", "Orange"]


// The sort() method can also be used to sort numbers in an array. For example, the following code sorts the array numbers:

let numbers_1 = [40, 100, 1, 5, 29, 10, 2907];
numbers_1.sort();
console.log(numbers_1); // [1, 10, 100, 2907, 29, 40, 5]


// the sort() method modifies the original array and does not create a new array. Also, the sort() method sorts the elements as strings by default. This works well for strings ("Apple" comes before "Banana"). However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1". Because of this, the sort() method will produce incorrect result when sorting numbers.

// To sort numbers correctly, you must provide a compare function. The compare function should return a negative, zero, or positive value, depending on the arguments. The following code sorts the array numbers in ascending order:

let compare = (a, b) => {
    return a - b;
}
let numbers2 = [40, 100, 1, 5, 29, 10, 2907];
numbers2.sort(compare);
console.log(numbers2); // [1, 5, 10, 29, 40, 100, 2907]


// In the above code, the compare function returns a negative value when a is less than b, zero when a is equal to b, and a positive value when a is greater than b. The sort() method sorts the elements by calling the compare function repeatedly.

// reverse()
// The reverse() method reverses the order of the elements in an array. For example, the following code reverses the array fruits:

let fruits5 = ["Apple", "Orange", "Banana"];
fruits5.reverse();
console.log(fruits5); // ["Banana", "Orange", "Apple"]


// lets take a look at another example:

let numbers_2 = [40, 100, 1, 5, 29, 10, 2907];
numbers_2.reverse();
console.log(numbers_2); // [2907, 10, 29, 5, 1, 100, 40]


// The reverse() method modifies the original array and does not create a new array.

// slice()
// The slice() method returns a shallow copy of a portion of an array into a new array object. The original array will not be modified. For example, the following code returns a shallow copy of the array fruits:

let fruits_5 = ["Apple", "Orange", "Banana"];
let copy_1 = fruits_5.slice();
console.log(copy_1); // ["Apple", "Orange", "Banana"]


// The slice() method can also be used to return a shallow copy of a portion of an array into a new array object. For example, the following code returns a shallow copy of the first two elements of the array fruits:

let fruits_7 = ["Apple", "Orange", "Banana"];
let copy_2 = fruits_7.slice(0, 2);
console.log(copy_2); // ["Apple", "Orange"]


// The slice() method takes two arguments: the index at which to begin extraction, and the index at which to end extraction (excluded). If the second argument is omitted, the slice() method will extract all elements from the start index to the end of the array. If the first argument is omitted, the slice() method will extract all elements from the beginning of the array to the end index.

// splice()
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. The original array will be modified. For example, the following code removes the first element of the array fruits:

let fruits_8 = ["Apple", "Orange", "Banana"];
fruits_8.splice(0, 1);
console.log(fruits_8); // ["Orange", "Banana"]


// The splice() method takes three arguments: the index at which to begin changing the array, the number of elements to remove, and the elements to add to the array. If the second argument is omitted, the splice() method will remove all elements from the start index to the end of the array. If the third argument is omitted, the splice() method will only remove elements from the array.

// indexOf()
// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. For example, the following code returns the index of the element "Banana" in the array fruits:

let fruits_9 = ["Apple", "Orange", "Banana"];
let index_1 = fruits_9.indexOf("Banana");
console.log(index_1); // 2