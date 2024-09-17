function longestPalindromicSubstring(s) {
    let start = 0;
    let end = 0;

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        // the right and left are now one step beyond the palindrome bounds
        if (end - start < right - left - 1) {
            start = left + 1;
            end = right - 1;
        }
    }

    for (let i = 0; i < s.length; i++) {
        // Check for odd-length palindromes centered at i
        expandAroundCenter(i, i);
        // Check for even-length palindromes centered at i and i+1
        expandAroundCenter(i, i + 1);
    }

    return s.substring(start, end + 1);
}

// Test Cases
console.log(longestPalindromicSubstring('babad')); // Output: 'bab' or 'aba'
console.log(longestPalindromicSubstring('cbbd'));  // Output: 'bb'
