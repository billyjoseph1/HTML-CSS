function mergeObjects(...objs) {
    // Merge all objects into one using the spread operator
    // Object.assign method or the spread syntax in an object literal ensures that later properties overwrite earlier ones
    return Object.assign({}, ...objs);
}

// Test case
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

console.log(mergeObjects(obj1, obj2)); // Output: { a: 1, b: 3, c: 4 }
