// Question 2
// Reverse characters in a string
// input: "Bhaskara", output: "araksahB"

// Method 1: built-in string/array methods
function reverseMethod1(str) {
    return str.split('').reverse().join('');
}

// Method 2: using a loop
function reverseMethod2(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Example usage:
const input = "Bhaskara";
console.log("Input:", input);
console.log("Method 1:", reverseMethod1(input));
console.log("Method 2:", reverseMethod2(input));