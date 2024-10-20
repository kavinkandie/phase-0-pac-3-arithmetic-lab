1 + 80; //=> 81
60 - 40; //=> 20
2 * 3.4; //=> 6.8
5.0 / 2.5; //=> 2
// Define the add function
function add(a, b) {
    return a + b;
}

// Call the add function
let result = add(5, 3);
console.log(result);  // Output: 8

let number = 5;

number++; //=> 5... hmmmm

number; //=> 6 -- the number was incremented after it was evaluated

number--; //=> 6

number; //=> 5
function subtract(a, b) {
    return b-a;
    
}
function multiply(a, b)
 { return a*b;
    
}
// Define the subtract function
function subtract(a, b) {
    return 0 - 52;
}

// Test the function//
console.log(result);  // Output: -5
function multiply(a, b)
 { return a*b;
    
}

function divide(a, b) {
    return a / b;
    
}
function subtract(a, b) {
    return a -b;


}
// Define the basic math functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

// Test the functions
console.log(add(10, 5));       // Output: 15
console.log(subtract(10, 5));  // Output: 5
console.log(multiply(10, 5));  // Output: 50
console.log(divide(10, 2));    // Output: 5

// Uncomment this to test division by zero
// console.log(divide(10, 0)); // Throws Error: Cannot divide by zero
// Define the increment function
function increment(n) {
    return n + 1;
}

// Test the function
console.log(increment(5));  // Output: 6
console.log(increment(-1)); // Output: 0
console.log(increment(0));  // Output: 1
// Define the decrement function
function decrement(n) {
    return n - 1;
}

// Test the function
console.log(decrement(5));   // Output: 4
console.log(decrement(0));   // Output: -1
console.log(decrement(-10)); // Output
// Define the makeInt function
function makeInt(n) {
    const parsed = parseInt(n, 10);  // Parse n as an integer in base 10
    if (isNaN(parsed)) {
        throw new Error("Invalid input: Cannot parse as an integer");
    }
    return parsed;
}

// Test the function
console.log(makeInt("42"));     // Output: 42
console.log(makeInt("3.14"));   // Output: 3
console.log(makeInt("abc"));    // Throws Error: Invalid input
// Define the makeInt function
function makeInt(n) {
    const parsed = parseInt(n, 10);  // Parse n as an integer in base 10
    return isNaN(parsed) ? NaN : parsed;
}

// Test the function
console.log(makeInt("42"));     // Output: 42
console.log(makeInt("3.14"));   // Output: 3
console.log(makeInt("abc"));    // Output: NaN
console.log(makeInt(""));       // Output: NaN

// Define the preserveDecimal function
function preserveDecimal(n) {
    const parsed = parseFloat(n);  // Parse n as a floating point number
    return isNaN(parsed) ? NaN : parsed;
}

// Test the function
console.log(preserveDecimal("3.14"));   // Output: 3.14
console.log(preserveDecimal("42"));     // Output: 42
console.log(preserveDecimal("abc"));    // Output: NaN
console.log(preserveDecimal(""));       // Output: NaN
