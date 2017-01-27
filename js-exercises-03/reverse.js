// reverse()
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".

function reverse (str) {
  var newStr = []
  for (var i = 0; i < str.length; i++) {
    newStr[str.length - i] = str[i]
  }
  return newStr.join('')
}

reverse('josep')

// Unshift
function reverse2 (str2) {
  var newStr2 = []
  for (var i = 0; i < str2.length; i++) {
    newStr2.unshift(str2[i])
  }
  return newStr2.join('')
}

reverse2('josep')

