// translate()
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".

function translate2 (originalText) {
  var numChars = originalText.length
  var currentChar
  var translatedText = ''

  function isConsonant (char) {
    return /[b-df-hj-np-tv-zñ]/i.test(char)
  }
  for (var i = 0; i < numChars; i++) {
    currentChar = originalText[i]
    translatedText += currentChar

    if (isConsonant(currentChar)) {
      translatedText += 'o' + currentChar
    }
  }
  return translatedText
}

translate2()
