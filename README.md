# fp-array
Is a group of functions to do **functional programming** faster and in a more convenient way than in `Array.prototype`

## Installation
`$ npm install fp-array`

## Usage
#### `filter()`
```javascript
const filter = require('fp-array').filter
const arr = [1, 'a', true, 6, 0, 4, undefined, 10]

filter(arr)
  .is(number)
  .and(even)
  .and(greaterThan4)
  .result() // [6, 10]

arr // [1, 'a', true, 6, 0, 4, undefined, 10]
```
#### Advantages
- Speed : Iterates only **one time** over `arr`, If we were using map we get 3 `map()` in 3 different arrays and 3 iterations to get the same result
- **Functional**: `arr` has not mutated
- **Declarative**: Easy to read syntax   

#### `map()`
```javascript
const map = require('fp-array').map
const arr = [1, 2, 3]

map(arr)
  .with(increment)
  .and(double)
  .and(String)
  .result() // ['4', '6', '8']

arr // [1, 2, 3]
```
Same advantages than before.
