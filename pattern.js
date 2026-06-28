// Question 1
// Write a function that takes n as input and prints the pattern:
// 1
// 21
// 321
// 4321
// ...

// Method 1: Nested loops
function printPatternMethod1(n) {
    for (let i = 1; i <= n; i++) {
        let str = '';
        for (let j = i; j >= 1; j--) {
            str += j;
        }
        console.log(str);
    }
}

// Method 2: Array methods
function printPatternMethod2(n) {
    Array.from({ length: n }, (_, i) => i + 1).forEach(i => {
        const row = Array.from({ length: i }, (_, j) => i - j).join('');
        console.log(row);
    });
}

// Example usage:
console.log("Method 1 (n=5):");
printPatternMethod1(5);

console.log("\nMethod 2 (n=5):");
printPatternMethod2(5);
