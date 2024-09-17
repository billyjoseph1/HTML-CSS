function isCaseInsensitivePalindrome(str) {
    // Convert the string to lower case to ensure the comparison is case insensitive
    let normalizedStr = str.toLowerCase();
    // Reverse the normalized string and compare it to the original normalized string
    let reversedStr = normalizedStr.split('').reverse().join('');
    // Return true if they are the same, false otherwise
    return normalizedStr === reversedStr;
}

// Test cases based on your input
console.log(isCaseInsensitivePalindrome('Aba'));  // Output: true
console.log(isCaseInsensitivePalindrome('Racecar'));  // Output: true
console.log(isCaseInsensitivePalindrome('Palindrome'));  // Output: false
console.log(isCaseInsensitivePalindrome('Madam'));  // Output: true
console.log(isCaseInsensitivePalindrome('Hello'));  // Output: false
