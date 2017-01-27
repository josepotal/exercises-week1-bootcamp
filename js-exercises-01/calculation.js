// Calculation

// Write a program that writes in the console all the multiples of 23 less than 500 and at the end writes the sum of all of them
function calculation () {
  var elements = ''
  var sum = 0
  for (var i = 0; i < 500; i++) {
    if ((i % 23) === 0) {
      elements += i + '\t'
      sum += i
    }
  }
  return 'Elements : ' + elements + '\n' +
  'Sum : ' + sum
}

calculation()

