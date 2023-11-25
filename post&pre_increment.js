let a = 5;

// Post-increment: returns the value of a, then increments it
console.log(a++); // output: 5
console.log(a);   // output: 6

// Pre-increment: increments the value of a, then returns it
console.log(++a); // output: 7

// Post-decrement: returns the value of a, then decrements it
console.log(a--); // output: 7
console.log(a);   // output: 6

// Pre-decrement: decrements the value of a, then returns it
console.log(--a); // output: 5

        // Expalnations of above code :
/*
In the code above, we first initialize the variable a with the value 5. Then we use the post-increment operator (a++) to return the value of a (which is 5), and then increment it to 6. We log the value of a++ to the console and get the output 5, and then log the value of a to the console and get the output 6.

Next, we use the pre-increment operator (++a) to increment the value of a to 7, and then return its new value. We log the value of ++a to the console and get the output 7.

Then, we use the post-decrement operator (a--) to return the value of a (which is 7), and then decrement it to 6. We log the value of a-- to the console and get the output 7, and then log the value of a to the console and get the output 6.

Finally, we use the pre-decrement operator (--a) to decrement the value of a to 5, and then return its new value. We log the value of --a to the console and get the output 5.
*/