// findLongestWord()

// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
var a = ['asdfa', 'adfad', 'adsf', 's', 'asdghjgkhgfd']

function findLongestWord (x) {
  var longest = 0
  for (var i = 0; i < x.length; i++) {
    if (x[i].length > longest) {
      longest = x[i].length
    } else {
      longest = longest
    }
  }
  return longest
}
findLongestWord(a)

// max

function findLongestWord2 () {
  function length (x) {
    return x.length
  }
  var all = a.map(length)
  return Math.max.apply(null, all)  // apply is null, as  any object with thisArg is provided
}

findLongestWord2(a)

// / max in one line

function findLongestWord3 () {
  function length (x) {
    return x.length
  }
  return Math.max.apply(null, a.map(length))
}

findLongestWord3(a)
