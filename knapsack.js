// Question 7: Unbounded Knapsack Problem - Carrot Optimization
// Find maximum value that can be packed in a bag with unlimited carrots of each type

/**
 * Solves the unbounded knapsack problem for carrots
 * @param {Array} carrotTypes - Array of objects with kg and price properties
 * @param {number} capacity - Maximum weight capacity of the bag
 * @returns {number} - Maximum value that can be achieved
 */
function getMaxValue(carrotTypes, capacity) {
  // dp[i] represents the maximum value achievable with capacity i
  const dp = new Array(capacity + 1).fill(0);

  // For each capacity from 1 to target capacity
  for (let w = 1; w <= capacity; w++) {
    // Try each carrot type
    for (const carrot of carrotTypes) {
      // If this carrot can fit in current capacity
      if (carrot.kg <= w) {
        // Choose maximum between current value and using this carrot
        dp[w] = Math.max(dp[w], dp[w - carrot.kg] + carrot.price);
      }
    }
  }

  return dp[capacity];
}

// Test with the provided example
const carrotTypes = [
  { kg: 5, price: 100 },
  { kg: 7, price: 150 },
  { kg: 3, price: 70 },
];
const capacity = 36;

console.log("=== CARROT KNAPSACK PROBLEM ===\n");

console.log("Given carrot types:");
carrotTypes.forEach((carrot, i) => {
  console.log(
    `Type ${i + 1}: ${carrot.kg}kg, $${carrot.price} (ratio: ${(
      carrot.price / carrot.kg
    ).toFixed(2)})`
  );
});
console.log(`Bag capacity: ${capacity}kg\n`);
