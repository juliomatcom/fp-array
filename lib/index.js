'use strict'

module.exports = {
  filter,
  map,
  reduce
}

function filter (arr) {
  let filters = []
  return {
    is: addFuncTo(filters),
    and: addFuncTo(filters),
    result: function () {
      return arr.filter(function (elm) {
        return filters.slice(1).reduce(
          (boolAcc, fn) => boolAcc && fn(elm),
          filters[0](elm)
        )
      })
    }
  }
}

function map (arr) {
  let fns = []
  return {
    with: addFuncTo(fns),
    and: addFuncTo(fns),
    result: function () {
      return arr.map(function (elm) {
        return fns.reduce((acc, fn) => fn(acc), elm)
      })
    }
  }
}

function reduce (arr, fn, acc) {
  return acc
   ? Array.prototype.reduce.call(arr, fn, acc)
   : Array.prototype.reduce.call(arr, fn)
}

function addFuncTo (arr) {
  return function (fn) {
    arr.push(fn)
    return this
  }
}
