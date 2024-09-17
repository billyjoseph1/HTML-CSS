function removeDuplicates(s) {
    const seen = new Set();
    let result = '';

    for (const char of s) {
        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }

    return result;
}

// Test Cases
console.log(removeDuplicates('programming')); // Output: 'progamin'
console.log(removeDuplicates('hello world')); // Output: 'helo wrd'
console.log(removeDuplicates('aaaaa'));       // Output: 'a'
console.log(removeDuplicates('abcd'));        // Output: 'abcd'
console.log(removeDuplicates('abccbc'));      // Output: 'abc'
