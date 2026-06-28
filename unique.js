// Question 3
// Remove duplicates in an array
// Input: [ 1, 2, 3, 6, 4, 3, 7, 4, 2, 6, 8, 2, 5, 9, 0, 1 ]
// Output: [ 1, 2, 3, 6, 4, 7, 8, 5, 9, 0 ]

// Method 1: Using Set
function uniqueMethod1(arr) {
    return [...new Set(arr)];
}

// Method 2: Using filter and indexOf
function uniqueMethod2(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Example usage:
const input = [1, 2, 3, 6, 4, 3, 7, 4, 2, 6, 8, 2, 5, 9, 0, 1];
console.log('Input:', input);
console.log('Method 1 (Set):', uniqueMethod1(input));
console.log('Method 2 (Filter/IndexOf):', uniqueMethod2(input));
