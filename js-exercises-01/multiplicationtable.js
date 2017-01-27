// Multiplications table

// Write a function that writes in the console the multiplication table (from 1 to 10)
function tablaMultiplicar () {
  var res = ''
  for (var i = 1; i < 11; i++) {
    for (var j = 1; j < 11; j++) {
      res += i * j + '\t'
    }
    res += '\n'
  }
  return res
}

tablaMultiplicar()
