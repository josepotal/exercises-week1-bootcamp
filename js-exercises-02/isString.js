// isString
// Define a function called isString that receives a value and return true if the value received is a string

function isString (x) {
  if (typeof (x) === 'string') {
    return true
  } else {
    return false
  }
}

isString(true)
isString('holo')
