"use strict"; // interpreter option
// Variable Hoisting
console.log(str);
var str; // window
str = "Hello Javascript !";
console.log(typeof str);
// z = 200;// Error with use strict

// 100 lines of code
var y;

function Test() {
  var x = 100; // Local Variable
  console.log(x);
}
Test();
