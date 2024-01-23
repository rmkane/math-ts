import * as myLibraryESM from '../dist/browser/bundle.esm.js'

console.log('Loaded ESM', myLibraryESM.product([1, 2, 3]) === 6)
