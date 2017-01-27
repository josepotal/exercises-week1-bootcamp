// filterLongWords()

// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.

var words = ['adsfa', 'aa', 'rrtyhbvcdf']

function filterLongWords (words, num) {
  var wordsLength = []
  var filteredWords = []
  for (var i in words) {
    if (words[i].length > num) {
      wordsLength.push(words[i].length)
      filteredWords.push(words[i])
    }
  }
  return filteredWords
}

filterLongWords(words, 3)

// using filter--> Not working

var arrWords = ['adsfa', 'aa', 'rrtyhbvcdf']
var num = 3

function filterLongWords2 (words, num) {
  function bigger (elem) {
    return elem.length >= num
  }
  return words.filter(bigger)
}

filterLongWords2(arrWords, 3)
