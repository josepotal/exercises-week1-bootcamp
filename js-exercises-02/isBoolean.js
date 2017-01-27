// isBoolean
// Define a function called isBoolean that receives a value and return true if the value received is a boolean

function isBoolean (x) {
  if (typeof (x) === 'boolean') {
    return true
  } else {
    return false
  }
}

isBoolean(true)
isBoolean(33)
