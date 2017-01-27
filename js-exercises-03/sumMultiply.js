// sum() & multiply()

// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

var a = [1, 2, 3, 4]

function add (acc, current) {
  return acc + current
}

function multiply (acc, current) {
  return acc * current
}

a.reduce(add)    // reduce is an applies a function recursively over an accumulator and over every item if the array (from left to right) until getting a unique value
a.reduce(multiply)

