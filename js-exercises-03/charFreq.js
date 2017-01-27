// charFreq()

// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it.
// Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").

function charFreq (word) {
  var freqObj = {}
  // word = 'abbabcbdbabdbdbabababcbcbab'
  var wordArr = word.split('')

  // wordArr.forEach(counter())
  wordArr.map(function counter (elem) { // use forEach() or map()
    var key = elem
    if (Object.keys(freqObj).includes(elem) === false) {
      freqObj[key] = 1
    } else {
      freqObj[key] = freqObj[key] + 1
    }
    return freqObj
  })
  return freqObj
}

charFreq('abbabcbdbabdbdbabababcbcbab')

// more elegant. Using forEahc higher order function

function charFreq (word) {
  var freqObj = {}
  var wordArr = word.split('')
  wordArr.forEach(function (x) { freqObj[x] = (freqObj[x] || 0) + 1 })
  return freqObj
}
