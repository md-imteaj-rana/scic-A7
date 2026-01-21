// Write a function that calculates the factorial of a number using a loop.

// Example:

// Input: 5
// Output: 120

function factorial(n) {
  if (n < 0) return undefined;

  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(5));