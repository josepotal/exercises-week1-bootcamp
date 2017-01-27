// max() function

// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript

function maximum (num1, num2) {
  var max = null
  if (num1 < num2) {
    max = num2
  } else {
    max = num1
  }
  return max
}

maximum(2, 4)
