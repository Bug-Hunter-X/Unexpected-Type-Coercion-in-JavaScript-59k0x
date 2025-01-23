function foo(a, b) {
  //Explicit type checking before operation
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    console.error("Invalid input types. Please provide numbers.");
    return NaN; // or handle the error appropriately
  }
}
console.log(foo(1, "1")); // Output: Invalid input types. Please provide numbers.
NaN
console.log(foo(1, 1)); // Output: 2