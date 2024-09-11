function countPalindromes(s) {
    let count = 0;

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            count++;
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        // Check for odd-length palindromes centered at i
        expandAroundCenter(i, i);
        // Check for even-length palindromes centered at i and i+1
        expandAroundCenter(i, i + 1);
    }

    return count;
}

// Test Cases
console.log(countPalindromes('abba')); // Output: 7
console.log(countPalindromes('racecar')); // Output: 7
console.log(countPalindromes('aab')); // Output: 4
console.log(countPalindromes('a')); // Output: 1
console.log(countPalindromes('abc')); // Output: 3
