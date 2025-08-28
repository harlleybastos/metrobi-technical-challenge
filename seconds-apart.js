// Question 2: Write an async JavaScript function that writes every item in any given array
// with 1, 2, 4, 8, etc., seconds apart

/**
 * Prints array items with exponential delays (1, 2, 4, 8... seconds)
 * @param {Array} arr - The input array to process
 */

async function printWithDelayHelper(arr) {
  for (let i = 0; i < arr.length; i++) {
    const delaySeconds = Math.pow(2, i);
    await delay(delaySeconds * 1000);
    console.log(
      `${arr[i]} (after ${delaySeconds} second${delaySeconds === 1 ? "" : "s"})`
    );
  }
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Test the function
console.log("Starting exponential delay demo...");
console.log("Current time:", new Date().toLocaleTimeString());
