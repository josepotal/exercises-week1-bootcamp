// maxOfThree() function

// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them

function maxOfThree (num1, num2, num3) {
  var max = null
  if (num1 > num2) {
    max = num1
  } else if (num2 > num3) {
    max = num2
  } else {
    max = num3
  }
  return max
}

maxOfThree(2, 4, 6)

function maximumOfThree (n1, n2, n3) {
  var res = 0
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] > res) {
      res = arguments[i]
    }
  }
  return res
}

maximumOfThree()
