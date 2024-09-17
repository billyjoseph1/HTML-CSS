function extractProperties(objects, ...properties) {
    // Map over each object in the input array
    return objects.map(obj => {
        // Create a new object for each, picking only the specified properties
        const filteredObj = {};
        properties.forEach(prop => {
            if (obj.hasOwnProperty(prop)) { // Check if the property exists on the original object
                filteredObj[prop] = obj[prop]; // Assign it to the new object
            }
        });
        return filteredObj; // Return the new object with only the specified properties
    });
}

// Test case
const objects = [{ a: 1, b: 2, c: 3 }, { a: 4, b: 5, c: 6 }];
console.log(extractProperties(objects, 'a', 'c')); // Output: [{ a: 1, c: 3 }, { a: 4, c: 6 }]
