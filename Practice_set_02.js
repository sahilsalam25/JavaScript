// Practice_Set_02:
// Problem No 1

/*
let age = prompt("What is your age?")
age = Number.parseInt(age)
if (age > 10 && age < 20) {
  console.log("Your age lies between 10 and 20")
}
else {
  console.log("Your age doesnt lies between 10 and 20")
}
*/

// Problem No 2
/*
let age = prompt("What is your age?")
switch (age) {
  case '12':
    console.log("Your age is 12")
    break
  case '13':
    console.log("Your age is 13")
    break
  case '14':
    console.log("Your age is 14")
    break
  case '15':
    console.log("Your age is 15")
    break
  default:
    console.log("Your age is not special")
}
*/
// Problem No 3
/*
let num = prompt("What is your age?")
num = Number.parseInt(num)
if (num % 2 == 0 && num % 3 == 0) {
  console.log("Your number is divisible by 2 and 3")
}
else {
  console.log("Your number is not divisible by 2 and 3")
}
*/

// Problem No 5
// Below Problem 5 is a best example of Ternary Operator:
let age = 9;
let a = age > 18 ? "You can drive" : "You cannot drive";
console.log(a);


// Q1: Using Logical Operators
// Create a JavaScript program to check if a age is between 10 and 20.

// let age = prompt("Enter your age");
// if (age >= 10 && age <= 20) {
//   console.log("You are between 10 and 20");
// } else {
//   console.log("You are not between 10 and 20");
// }


// In this example, we use the && operator to check if the age is between 10 and 20. If the age is between 10 and 20, the condition evaluates to true, and the first console.log statement is executed. If the age is not between 10 and 20, the condition evaluates to false, and the second console.log statement is executed.


// Q2: Using Switch Case
// Demonsrate the use of switch case in JavaScript.

let day = prompt("Enter a day");
switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  case "Thursday":
    console.log("Today is Thursday");
    break;
  case "Friday":
    console.log("Today is Friday");
    break;
  case "Saturday":
    console.log("Today is Saturday");
    break;
  case "Sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("Invalid day");
}

/*
In this example, we use the switch statement to check the value of the day variable. If the value of day is Monday, the first console.log statement is executed. If the value of day is Tuesday, the second console.log statement is executed. If the value of day is not Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, or Sunday, the default statement is executed.

Also do note that the break keyword is used to prevent the execution of the next case statement. If you don't use the break keyword, the execution will continue to the next case statement, even if the condition is false.


Q3: Divisible by 2 and 3
Create a JavaScript program to check if a number is divisible by 2 and 3.

let num = prompt("Enter a number");
if (num % 2 == 0 && num % 3 == 0) {
  console.log("The number is divisible by 2 and 3");
} else {
  console.log("The number is not divisible by 2 and 3");
}


In this example, we use the && operator to check if the number is divisible by 2 and 3. If the number is divisible by 2 and 3, the condition evaluates to true, and the first console.log statement is executed. If the number is not divisible by 2 and 3, the condition evaluates to false, and the second console.log statement is executed.


Q4: Divisible by 2 or 3
Create a JavaScript program to check if a number is divisible by 2 or 3.


Q5: Using Ternary Operator
Print "you can drive" if the age is greater than or equal to 18, otherwise print "you cannot drive". Use the ternary operator.

let age = prompt("Enter your age");
age >= 18
  ? console.log("You can drive")
  : console.log("You cannot drive");


In this example, we use the ternary operator to check if the age is greater than or equal to 18. If the age is greater than or equal to 18, the condition evaluates to true, and the first console.log statement is executed. If the age is less than 18, the condition evaluates to false, and the second console.log statement is executed.

*/