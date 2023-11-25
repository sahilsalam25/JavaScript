
/* Conditional Statements:

Conditional statements are used to perform different actions based on different conditions. In JavaScript, we have the following conditional statements:

For example, when you log in to Instagram, you can use email or username. If you use email, your program might know that it should search in the place where you stored emails, and if you use a username, it should search in the place where you stored usernames.

if statement
if-else statement
if else-if else statement
The Basic If Statement
The basic syntax for an if statement is as follows:

if(condition){
    //code if condition is true
}


The if statement checks if the condition is true or false. If the condition is true, the code inside the if statement is executed. If the condition is false, the code inside the if statement is not executed.

The If-Else Statement
The basic syntax for an if-else statement is as follows:

if(condition){
    //code if condition is true
}
else{
    //code if condition is false
}


The if-else statement checks if the condition is true or false. If the condition is true, the code inside the if statement is executed. If the condition is false, the code inside the else statement is executed.

The If-Else If-Else Statement
The basic syntax for an if-else if-else statement is as follows:

if(condition1){
    //code if condition1 is true
}
else if(condition2){
    //code if condition2 is true
}
else{
    //code if both condition1 and condition2 are false
}


The if-else if-else statement checks if the condition1 is true or false. If the condition1 is true, the code inside the if statement is executed. If the condition1 is false, the code inside the else if statement is executed. If both condition1 and condition2 are false, the code inside the else statement is executed.
*/

// Example Programs
// Program 1
// print "Hello World" if the user enters "Hello" as input.

// let input1 = prompt("Enter a string");
// if(input1 === "Hello"){
//     console.log("Hello World");
// }


// Program 2
// print "Hello World" if the user enters "Hello" as input. Otherwise, print "Goodbye World".

// let input2 = prompt("Enter a string");
// if(input2 === "Hello"){
//     console.log("Hello World");
// }
// else{
//     console.log("Goodbye World");
// }


// Program 3
// print "Hello World" if the user enters "Hello" as input. Otherwise, print "Goodbye World" if the user enters "Goodbye" as input. Otherwise, print "Invalid Input".

// let input3 = prompt("Enter a string");
// if(input3 === "Hello"){
//     console.log("Hello World");
// }
// else if(input3 === "Goodbye"){
//     console.log("Goodbye World");
// }
// else{
//     console.log("Invalid Input");
// }


// Note that we didn't convert the input to a number datatype. This is because we are not performing any mathematical operations on the input. If we were performing mathematical operations on the input, we would have converted the input to a number datatype.

// For Example

// let input4 = prompt("Enter a number");
// if(input4 > 10){
//     console.log("Number is greater than 10");
// }
// else if(input4 < 10){
//     console.log("Number is less than 10");
// }
// else{
//     console.log("Number is equal to 10");
// }



let a = prompt("Hey whats you age?");
a = Number.parseInt(a); // Converting the string to a number, Because JavaScript is always take input in String format so we have to convert String into Int... :
if(a<0){
  alert("This is an invalid age");
}
else if(a<9){
  alert("You are a kid and you cannot even think of driving");
}
else if(a<18 && a>=9){
  alert("You are a kid and you can think of driving after 18");
}
else{
  alert("You can now drive as you are above 18");
}
console.log("Done");

// Sample Example of Ternary Operator - 
console.log("You can", (a<18? "not drive" :"drive"));