/**
 * Calculates the factorial of a non-negative integer.
 *
 * @param {number} n - The non-negative integer for which to calculate the factorial.
 * @returns {number} Returns the factorial of the given integer.
 */
function factorial(n: number): number {
  return n > 0 ? n * factorial(n - 1) : 1
}

export { factorial }
