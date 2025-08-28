// Question 1: Write a JavaScript function that finds the duplicate items in any given array

/**
 * Finds duplicate items in an array
 * @param {Array} arr - The input array
 * @returns {Array} - Array containing only the duplicate items (no duplicates in result)
 */
function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();

  for (const item of arr) {
    if (seen.has(item)) {
      duplicates.add(item);
    } else {
      seen.add(item);
    }
  }

  return Array.from(duplicates);
}

// Test cases
console.log("Testing findDuplicates:");
console.log(findDuplicates([1, 2, 3, 4, 5])); // []
console.log(findDuplicates([1, 2, 3, 2, 4, 3])); // [2, 3]
console.log(findDuplicates(["a", "b", "c", "a", "d", "b"])); // ['a', 'b']
console.log(findDuplicates([1, 1, 1, 2, 2, 3])); // [1, 2]
