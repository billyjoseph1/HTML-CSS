function filterAndSort(filterFn, ...numbers) {
    // the filter function to keep only numbers that pass the test
    const filtered = numbers.filter(filterFn);
  
    // Sort the filtered numbers in ascending order
    const sorted = filtered.sort((a, b) => a - b);
  
    // Returns the sorted array
    return sorted;
  }
  
  // Test case
  const isEven = (num) => num % 2 === 0;
  console.log(filterAndSort(isEven, 5, 3, 8, 6, 2)); // Output: [2, 6, 8]
  