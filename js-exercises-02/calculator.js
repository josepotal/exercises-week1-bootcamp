// Calculator
// Define a function called calculator that receives an operation and two numbers and returns the result of the operation applied to the values passed as parameters

var calculator = function (operation, x, y) {
  var result
  if (operation === 'suma') {
    result = x + y
  } else if (operation === 'resta') {
    result = x - y
  } else if (operation === 'multiplication') {
    result = x * y
  } else if (operation === 'division') {
    result = x / y
  }
  return result
}

calculator('suma', 2, 3)

// Using switch
function calculator2 (operation, x, y) {
  var result
  switch (operation) {
    case 'suma':
      result = x + y
      break
    case 'resta':
      result = x - y
      break
    case 'multiplication':
      result = x * y
      break
    case 'division':
      result = x / y
      break
  }
  return result
}
calculator2('suma', 2, 3)

