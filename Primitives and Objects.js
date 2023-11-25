/*
In JavaScript, there are 7 primitive data types. The primitive data types are fundamental data types that are built into JavaScript. A good trick to remember these 7 data types is "NNSSBBU":

N - null
N - number
S - symbol
S - string
B - boolean
B - bigint
U - undefined

These data types are used to define the type of variables and the type of content that can be stored in them. For example:

let nullVar = null;
let numVar = 29;
let boolVar = true;
let bigIntVar = BigInt("567");
let strVar = "sahil";
let symbolVar = Symbol("I'm a nice symbol");
let undefinedVar = undefined;
*/


// nn bb ss u - Primitives in Js
let a = null;
let b = 345;
let c = true; // can also be false
let d = BigInt("567") + BigInt("3")
let e = "Sahil"
let f = Symbol("I am a nice symbol")
let g
console.log(a, b, c , d, e, f, g)
console.log(typeof c)

// Non Primitive Data Type - Objects in Js
const item = {
  "Sahil": true,
  "Salam": false,
  "Amir": 67,
  "Zakaur": undefined
}
console.log(item["Sahil"])