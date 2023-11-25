/*

JavaScript syntax is the set of rules, how JavaScript programs are constructed:

How to create variables:
var x;
let y;

How to use variables:
x = 5;
y = 6;
*/
/*Variables are Containers for Storing Data
JavaScript Variables can be declared in 4 ways:

Automatically
Using var
Using let
Using const
*/

let z = x + y;
var a = 67; // a contains 67
console.log(a);
a = "Sahil";
console.log(a);
/*
Rules for Naming Variables
Variable names cannot start with a number.
var 1name = "Sahil"; // will throw an error because of the 1 at the start


Variable names cannot contain spaces.
var my name = "Sahil"; // will throw an error because of the space


Variable names cannot contain special characters like !, @, #, $, %, ^, &, *, (, ), -, +, =, [, ], {, }, |, \, :, ;, <, >, ,, ., /, ?, ~.
var my-name = "Sahil"; // will throw an error because of the `-` character


Variable names cannot be a reserved keyword. Reserved keywords are the keywords that are already used by the language. For example, var, let, const, if, else, for, while, function, return, etc.
var var = "Sahil"; // will throw an error because var is a reserved keyword


Variable names are case sensitive. This means that name and Name are two different variables.
var name = "Sahil";
var Name = "Salam";
console.log(name); // will print "Sahil"
console.log(Name); // will print "Salam"
*/