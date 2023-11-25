// while loop
// Syntax
// The syntax of the while loop is as follows:

// while (condition) {
//     code to be executed
// }

let n = prompt("Enter the value of n");
n = Number.parseInt(n);

let i = 0;
while(i<n){
  console.log(i);
  i++;
}



/*
while Loop
A while loop is a type of loop that repeatedly executes a block of code while a particular condition is true. The loop will keep executing until the condition becomes false.

Syntax
The syntax of the while loop is as follows:

while (condition) {
    code to be executed
}


Here's an example of using a while loop to print all the numbers from 0 to the user input:

let input = prompt("Enter a number");
input = Number(input);
let i = 0;
while (i < input) {
    console.log(i);  // print the current value of i
    i++;  // increment i by 1
}


The code above works as follows:

Ask the user to enter a number using prompt().
Convert the user input to a number using Number().
Initialize the variable i to 0.
Check if i is less than the user input.
If i is less than the user input, print the current value of i using console.log().
Increment i by 1.
Check the condition again, and repeat the loop until i is no longer less than the user input.
Example without i++
What happens if we don't increment i by 1? Here's an example of using a while loop to print all the numbers from 0 to the user input without using i++:

let input = prompt("Enter a number");
input = Number(input);
let i = 0;
while (i < input) {
    console.log(i);  // print the current value of i
}


In the code above, the i variable is never incremented, so the loop will continue to execute indefinitely.
*/