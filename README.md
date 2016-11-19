# fp-array
Is a group of functions to do **functional programming** faster and in a more convenient way than in `Array.prototype`

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Installation
`$ npm install fp-array`

## Usage
#### `#map()`
```javascript
const map = require('fp-array').map
const arr = [1, 2, 3]
// callbacks
const increment = n => n + 1
const double = n => n * 2

map(arr)
  .with(increment)
  .and(double)
  .and(String)
  .result() // ['4', '6', '8']

arr // [1, 2, 3]
```
#### Notes
- Iterates only **one time** over `arr`
- **Inmutable**: `arr` has not mutated, a new Array is returned when `result()`
- **Declarative**: Easy to read syntax

#### `#filter()`
```javascript
const filter = require('fp-array').filter
const arr = [1, 'a', true, 6, 0, 4, undefined, 10]

const number = n => typeof n === 'number'
const greaterThan4 = n => n > 4
const even = n => n % 2 === 0

filter(arr)
  .is(number)
  .and(even)
  .and(greaterThan4)
  .result() // [6, 10]

arr // [1, 'a', true, 6, 0, 4, undefined, 10]
```
Same advantages than before.
