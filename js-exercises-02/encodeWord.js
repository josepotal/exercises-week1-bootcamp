// encodeWord

// Define a function called encodeWord that receives a string and return the codified version of that string replacing the following characters:

// 7 instead of T
// 4 instead of A
// 5 instead of S
// 0 instead of O

function encodeWord (x) {
  x = x.replace(/A/gi, 4)
  x = x.replace(/T/gi, 7)
  x = x.replace(/S/gi, 5)
  x = x.replace(/O/gi, 0)
  return x
}

encodeWord('POTATOES')

// Not working
function encodeWord2 (x) {
  var conversion = { 'T': 7, 'A': 4, 'S': 5, 'O': 0}
  var ar = x.split('')
  ar.((/A'/gi, conversion['A']), (/T/gi, conversion['T']), (/S/gi, conversion['S']), (/O/gi, conversion['O']))
  return x
}


('POTATOES')
