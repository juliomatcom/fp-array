# fp-array
Is a group of functions to do **functional programming** faster and in a more convenient way than in `Array.prototype`

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Installation
`$ npm install fp-array`

## Usage
#### `filter()`
```javascript
const filter = require('fp-array').filter
const arr = [1, 'a', true, 6, 0, 4, undefined, 10]
...

filter(arr)
  .is(number)
  .and(even)
  .and(greaterThan4)
  .result() // [6, 10]

arr // [1, 'a', true, 6, 0, 4, undefined, 10]
```
#### Advantages
- Speed : Iterates only **one time** over `arr` if we use `Array.prototype.filter()` we
could end with 3 iterations on 3 arrays to get the **same result** unless you made a new function composed of this 3
- **Functional**: `arr` has not mutated
- **Declarative**: Easy to read syntax   

#### `map()`
```javascript
const map = require('fp-array').map
const arr = [1, 2, 3]
...

map(arr)
  .with(increment)
  .and(double)
  .and(String)
  .result() // ['4', '6', '8']

arr // [1, 2, 3]
```
Same advantages than before.
