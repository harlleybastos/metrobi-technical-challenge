// Question 5: Two Egg Problem - Find the highest floor an egg can be dropped from 
// without breaking, using minimum drops in worst-case scenario

/**
 * Solves the two egg problem using dynamic programming
 * @param {number} floors - Total number of floors (100 in the problem)
 * @param {number} eggs - Number of eggs available (2 in the problem)
 * @returns {number} - Minimum number of drops needed in worst case
 */
function twoEggProblem(floors, eggs) {
  // dp[i][j] represents minimum drops needed with i eggs and j floors
  const dp = Array(eggs + 1)
    .fill(null)
    .map(() => Array(floors + 1).fill(0));

  // Base cases
  // With 1 egg, we need to try all floors from bottom to top
  for (let j = 1; j <= floors; j++) {
    dp[1][j] = j;
  }

  // With 1 floor, we need only 1 drop regardless of eggs
  for (let i = 1; i <= eggs; i++) {
    dp[i][1] = 1;
  }

  // Fill the dp table
  for (let i = 2; i <= eggs; i++) {
    for (let j = 2; j <= floors; j++) {
      dp[i][j] = Infinity;

      // Try dropping from each floor k (1 to j)
      for (let k = 1; k <= j; k++) {
        // Two cases after dropping from floor k:
        // 1. Egg breaks: we have (i-1) eggs and (k-1) floors to check
        // 2. Egg doesn't break: we have i eggs and (j-k) floors above k
        // We take the worst case (maximum) and add 1 for current drop
        const worstCase =
          1 +
          Math.max(
            dp[i - 1][k - 1], // Egg breaks
            dp[i][j - k] // Egg doesn't break
          );

        // Take minimum across all possible drop floors
        dp[i][j] = Math.min(dp[i][j], worstCase);
      }
    }
  }

  return dp[eggs][floors];
}

// Test and demonstrate the solution
console.log("=== TWO EGG PROBLEM SOLUTION ===\n");

console.log("Dynamic Programming Solution:");
console.log(
  `Minimum drops needed for 100 floors with 2 eggs: ${twoEggProblem(100, 2)}`
);
