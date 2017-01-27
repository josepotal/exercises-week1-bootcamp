// Calculator Plus
// Define a function called calculator that receives an operation and several numbers (can be 2 or 10 or whatever) returns the result of the operation applied to the values passed as parameters
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

