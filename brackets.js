// Question 4: Write an efficient method that tells us whether or not an input string
// brackets ("{", "}", "(", ")", "[", "]") opened and closed properly

/**
 * Validates if brackets in a string are properly opened and closed
 * @param {string} str - The input string containing brackets
 * @returns {boolean} - true if brackets are properly balanced, false otherwise
 */
function isValidBrackets(str) {
  // Stack to keep track of opening brackets
  const stack = [];

  // Map of closing brackets to their corresponding opening brackets
  const bracketPairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  // Set of opening brackets for quick lookup
  const openingBrackets = new Set(["(", "{", "["]);

  for (const char of str) {
    if (openingBrackets.has(char)) {
      // Push opening bracket onto stack
      stack.push(char);
    } else if (char in bracketPairs) {
      // Check if we have a matching opening bracket
      if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
        return false;
      }
    }
    // Ignore non-bracket characters
  }

  // Valid if stack is empty (all brackets were matched)
  return stack.length === 0;
}

// Test cases
console.log("Testing bracket validation:");

// Test cases from the problem
console.log('"{[]}" =>', isValidBrackets("{[]}")); // true
console.log('"{(])}" =>', isValidBrackets("{(]]}")); // false
console.log('"{([)]}" =>', isValidBrackets("{([)]}")); // false

// Additional test cases
console.log('"" =>', isValidBrackets("")); // true (empty string)
console.log('"()" =>', isValidBrackets("()")); // true
console.log('"()[]{}()" =>', isValidBrackets("()[]{}()")); // true
console.log('"([{}])" =>', isValidBrackets("([{}])")); // true
console.log('"(((" =>', isValidBrackets("(((")); // false
console.log('")))" =>', isValidBrackets(")))")); // false
console.log('"([)]" =>', isValidBrackets("([)]")); // false
console.log('"({[}])" =>', isValidBrackets("({[}])")); // false

// Test with non-bracket characters
console.log('"a(b)c[d]e{f}g" =>', isValidBrackets("a(b)c[d]e{f}g")); // true
console.log(
  '"hello(world[test{case}])" =>',
  isValidBrackets("hello(world[test{case}])")
); // true
console.log(
  '"invalid(bracket]order" =>',
  isValidBrackets("invalid(bracket]order")
); // false

console.log("\nTime Complexity: O(n)");
console.log("Space Complexity: O(n) in worst case");
