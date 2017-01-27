//  Fibonacci Challenge
// The fibonacci sequence is a mathematical sequence of integers. By definition, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.
// 0, 1, 1, 2, 3, 5, 8, 13, ..
// Define a function called fibonacci with a single argument n The function should return the nth number of the fibonacci sequence.

function fibonacci (n) {
  var ArrFib = [0, 1]
  // logic = ArrFib[ArrFib.length] + ArrFib[ArrFib.length - 1 ]
  do {
    var value = ArrFib[ArrFib.length - 1] + ArrFib[ArrFib.length - 2 ]
    ArrFib.push(value)
    ArrFib
  } while (ArrFib.length < 30)

  return ArrFib[n + 1]
}

fibonacci(5)
