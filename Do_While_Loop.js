// Do While Loop
// A do-while loop is a type of loop that executes a block of code at least once, and then repeatedly executes the block of code while a particular condition is true.

// Syntax
// The syntax for the do-while loop is as follows:

// do {
//   code to be executed
// } while(condition);


// The following code asks the user for a number and prints all the numbers from 0 to that number using a do-while loop:

//Example-01- Do_While_Loop :

let n = prompt("Enter the value of n");
n = Number.parseInt(n);

let i = 10;
do{
  console.log(i);
  i++;
}while (i < n) 

/* //Example-02- Do_While_Loop :
let input;
do {
    input = prompt("Enter a number");
    input = Number(input);
} while(isNaN(input));
let i = 0;
do {
    console.log(i);
    i++;
} while(i < input);
*/


// The first do loop asks the user for a number and assigns it to the input variable. If the input is not a number, the loop will run again until a valid number is entered.
// The let i = 0 line initializes a counter variable i to 0.
// The second do loop will keep running as long as i is less than input.
// The console.log(i) line will print the value of i to the console on each iteration.
// The i++ statement increments the value of i by 1 after each iteration.