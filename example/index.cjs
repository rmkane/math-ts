// eslint-disable-next-line @typescript-eslint/no-var-requires
const myLibraryCJS = require('../dist/browser/bundle.cjs.js')

console.log('Loaded CJS', myLibraryCJS.product([1, 2, 3]) === 6)
