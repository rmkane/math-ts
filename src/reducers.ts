/**
 * Calculates the product of an array of numbers.
 *
 * @param {number[]} values - An array of numbers.
 * @returns {number} Returns the product of the numbers in the array. Returns 0 for an empty array.
 */
function product(values: number[]): number {
  if (values.length < 1) {
    return 0
  }

  return values.reduce(function (
    previousValue: number,
    currentValue: number
  ): number {
    return previousValue * currentValue
  }, 1)
}

/**
 * Calculates the sum of an array of numbers.
 *
 * @param {number[]} values - An array of numbers.
 * @returns {number} Returns the sum of the numbers in the array.
 */
function sum(values: number[]): number {
  return values.reduce(function (
    previousValue: number,
    currentValue: number
  ): number {
    return previousValue + currentValue
  }, 0)
}

export { product, sum }
