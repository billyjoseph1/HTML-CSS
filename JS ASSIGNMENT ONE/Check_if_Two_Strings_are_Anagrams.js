function areAnagrams(str1, str2) {
    // Sort the characters in each string and compare them
    const normalize = str => str.toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}

// Test Cases
console.log(areAnagrams('Listen', 'Silent')); // Output: true
console.log(areAnagrams('Hello', 'World'));   // Output: false
