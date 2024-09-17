function longestCommonPrefix(strs) {
  if (strs.length === 0) return ""; // Return an empty string if no strings are provided

  let prefix = strs[0]; // Start with the first string as the potential prefix

  for (let i = 1; i < strs.length; i++) {
    // Compare the prefix with each string
    while (strs[i].indexOf(prefix) !== 0) {
      // Shorten the prefix by one character from the end until a match is found
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "no common prefix"; // If the prefix is reduced to an empty string, return it
    }
  }

  return prefix; // Return the longest common prefix
}

// Test cases based on your input
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: 'fl'
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ''
console.log(longestCommonPrefix(["interspecies", "interstellar", "interstate"])); // Output: 'inters'
console.log(longestCommonPrefix(["prefix", "prefixes", "preform"])); // Output: 'pre'
console.log(longestCommonPrefix(["apple", "banana", "cherry"])); // Output: ''
