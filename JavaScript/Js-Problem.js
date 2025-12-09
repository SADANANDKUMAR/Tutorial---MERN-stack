 // problem - 1
 // Topic: Variables & Block Scope (var hoisting)
// Concept: `var` is hoisted with value `undefined`.
// Problem: Log a `var` before assignment to observe hoisting.
// Hints: Declare inside function and log before and after assignment.
// Examples:
// Input: demoHoisting()
// Output: undefined then assigned value

function demoHoisting() {
  // TODO: implement

    console.log(value); // Should log: undefined
    var value = "assigned value";
    console.log(value); // Should log: assigned value
}

// Test cases (uncomment to run after implementation)
demoHoisting();

// Problem - 2

// Topic: Hoisting concatenation
// Concept: Hoisted `var` yields `undefined` in string.
// Problem: Concatenate hoisted variable with a string.
// Hints: Use `var` and print before  and after assignment.
// Examples:
// Input: demoHoistingSentence()
// Output: "undefined is a great class" then proper value

function demoHoistingSentence() {
  // TODO: implement 
    console.log(greeting + " is a great class"); // Should log: "undefined is a great class"
    var greeting = "JavaScript";
 //   console.log(greeting + " is a great class"); // Should log: "JavaScript is a great class"
}

// Test cases (uncomment to run after implementation)
 demoHoistingSentence();

// Problem - 3

 // Topic: var ordering
// Concept: Hoisted declaration then assignment.
// Problem: Log before and after assignment.
// Hints: Inside one function log both.
// Examples:
// Input: demoVarOrder()
// Output: undefined then value


function demoVarOrder() {
  // TODO: implement
  console.log(val)
  var val = 20;
  console.log(val)
}

// Test cases (uncomment to run after implementation)
// demoVarOrder();