// Multiplications table on demand

// Write a function that writes in the console the multiplication table (in one column) of any number passed as parameter
function multiOnDemand (num) {
  var res = '\n'
  for (var i = 1; i < 11; i++) {
    res += i * num + '\n'
  }
  return res
}

multiOnDemand()
