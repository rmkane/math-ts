/**
 * Checks if a given number is even.
 *
 * @param {number} number - The number to be checked.
 * @returns {boolean} Returns true if the number is even, otherwise false.
 */
function even(number: number): boolean {
  return number % 2 === 0
}

/**
 * Checks if a given number is odd.
 *
 * @param {number} number - The number to be checked.
 * @returns {boolean} Returns true if the number is odd, otherwise false.
 */
function odd(number: number): boolean {
  return number % 2 !== 0
}

export { even, odd }
