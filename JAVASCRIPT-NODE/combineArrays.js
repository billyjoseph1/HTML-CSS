function combineArrays(...arrays) {
    // Flatten the array of arrays using the spread operator
    const combined = [].concat(...arrays);

    // Remove duplicates by converting to a Set and back to an array
    const unique = [...new Set(combined)];

    // Return the array with unique elements
    return unique;
}

// Test case
const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
const arr3 = [5, 6, 7];

console.log(combineArrays(arr1, arr2, arr3)); // Output: [1, 2, 3, 4, 5, 6, 7]
