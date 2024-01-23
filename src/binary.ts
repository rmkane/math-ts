/**
 * Performs integer division and returns the quotient and remainder as an array.
 *
 * @param {number} n - The dividend.
 * @param {number} m - The divisor (non-zero).
 * @returns {[number, number]} Returns an array containing the quotient and remainder.
 */
function divmod(n: number, m: number): [number, number] {
  return [Math.trunc(n / m), modulo(n, m)]
}

/**
 * Computes the remainder after division of two numbers.
 *
 * @param {number} n - The dividend.
 * @param {number} m - The divisor (non-zero).
 * @returns {number} Returns the remainder after division.
 */
function modulo(n: number, m: number): number {
  return ((n % m) + m) % m
}

export { divmod, modulo }
