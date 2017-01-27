// translate()

// Represent a small bilingual lexicon as a Javascript object in the following fashion {"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"} and use it to translate your Christmas cards from English into Swedish.
var x = 'merry christmas and a happy new year'
var sentence = x.split(' ')

function translate (word) {
  var lexicon = {'merry': 'god', 'christmas': 'jul', 'and': 'och', 'happy': 'gott', 'new': 'nytt', 'year': 'år'}

  if (lexicon[word]) {
    return lexicon[word]
  }
  return word
}

var sentenceSwedish = sentence.map(translate).join(' ')
sentenceSwedish
