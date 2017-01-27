// encodeWordPlus
// Improve the previous function to add a random number between 0 and 1000 every 7 characters
var x = 'Higher Order Functions are those functions that accept other functions as...'
function encodeWordPlus (original) {
  var encoded = original.split('')
  // var encoded = original
  for (var i = 0; i < encoded.length; i += 7) {
    var num = Math.floor(Math.random() * 1000)
    encoded.splice(i, 0, num)
  }
  return encoded.join('')
}

encodeWordPlus(x)
