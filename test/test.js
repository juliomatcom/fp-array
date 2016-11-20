/* global it, describe */
const assert = require('assert')
const fpArray = require('../lib/index')
const filter = fpArray.filter
const map = fpArray.map
const reduce = fpArray.reduce

describe('fp-array', function () {
  describe('#filter()', function () {
    it('should be defined', function () {
      const actual = typeof filter
      const expected = 'function'
      assert.deepEqual(actual, expected)
    })

    it('should return an object', function () {
      const actual = typeof filter([])
      const expected = 'object'
      assert.deepEqual(actual, expected)
    })

    it('should filter with one function', function () {
      const arr = [0, 5, null]
      const actual = filter(arr)
        .is(Boolean)
        .result()
      const expected = [5]
      assert.deepEqual(actual, expected)
    })

    it('should not mutate the original arr', function () {
      const actual = [0, 5, null]
      const boolean = n => typeof n === 'boolean'
      filter(actual)
        .is(boolean)
        .result()
      const expected = [0, 5, null]
      assert.deepEqual(actual, expected)
    })

    it('should filter with multiple functions', function () {
      const arr = [1, 'a', true, 6, 0, 4, undefined, 10]
      // filters functions
      const number = n => typeof n === 'number'
      const greaterThan4 = n => n > 4
      const even = n => n % 2 === 0

      const actual = filter(arr)
        .is(number)
        .and(greaterThan4)
        .and(even)
        .result()
      const expected = [6, 10]
      assert.deepEqual(actual, expected)
    })
  })

  describe('#map()', function () {
    it('should be defined', function () {
      const actual = typeof map
      const expected = 'function'
      assert.deepEqual(actual, expected)
    })

    it('should return an object', function () {
      const actual = typeof map([])
      const expected = 'object'
      assert.deepEqual(actual, expected)
    })

    it('should map with one function', function () {
      const arr = [0, true, null]
      const actual = map(arr)
        .with(Boolean)
        .result()
      const expected = [false, true, false]
      assert.deepEqual(actual, expected)
    })

    it('should not mutate the original arr', function () {
      const actual = [0, true, null]
      map(actual)
        .with(Boolean)
        .result()
      const expected = [0, true, null]
      assert.deepEqual(actual, expected)
    })

    it('should map with multiple functions', function () {
      const arr = [1, 2, 3]

      const increment = n => n + 1
      const double = n => n * 2

      const actual = map(arr)
        .with(increment)
        .and(double)
        .and(String)
        .result()
      const expected = ['4', '6', '8']
      assert.deepStrictEqual(actual, expected)
    })
  })

  describe('#reduce()', function () {
    it('should be defined', function () {
      const actual = typeof reduce
      const expected = 'function'
      assert.deepEqual(actual, expected)
    })

    it('should work without initial value', function () {
      const arr = [1, 2, 3]
      const actual = reduce(
        arr,
        (acc, currentValue) => acc + currentValue
      )
      const expected = 6
      assert.strictEqual(actual, expected)
    })

    it('should allow an initial value', function () {
      const arr = [1, 2, 3]
      const actual = reduce(
        arr,
        (acc, currentValue) => acc + currentValue,
        5
      )
      const expected = 11
      assert.strictEqual(actual, expected)
    })
  })
})
