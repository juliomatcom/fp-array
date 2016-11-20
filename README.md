# fp-array
`fp-array` is a group of functions to do **declarative programming** in a more convenient way than in `Array.prototype`

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Installation
`$ npm install fp-array`

## Syntax
```Javascript
const map = require('fp-array').map
const filter = require('fp-array').filter
const reduce = require('fp-array').reduce
const arr = [...]

map(arr)
  .with(callback)
  [.and(callback2)]
  [...]
  .result()

filter(arr)
  .is(callback)
  [.and(callback2)]
  [...]
  .result()

reduce(arr, callback[, initialValue])
```
### Examples
#### `#map()`
```javascript
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
Same notes than before applies.

#### `#reduce()`
```javascript
const arr = [1, 2, 3]
reduce(
  arr,
  (acc, currentValue) => acc + currentValue,
  5
) // 11
```
`reduce()` works exactly like the original except now is outside the `Array.prototype`  

More examples in [tests](test/test.js).

#### Have any idea ?
Open an issue or say hi on twitter: [@juliomatcom](https://twitter.com/juliomatcom)

#### MIT Licensed
Copyright (c) 2016 Julio César Martín
