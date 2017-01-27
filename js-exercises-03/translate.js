// translate()
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".


function translate (originalText) {
  var numChars = originalText.length
  var currentChar
  var translatedText = ''
  
  function isVowel (char) {
    return /[aeiou]/.test(char.toLowerCase())
  }
  
  function isSpecialChar (char) {
    return /[ ,*]/.test(char)
  }

  for (var i = 0; i < numChars; i++) {
    currentChar = originalText[i]
    translatedText += currentChar
    
    if (!isVowel(currentChar) && !isSpecialChar(currentChar)){
        translatedText += 'o' + currentChar
    }
  }
    return translatedText
}


translate()


//

function translate (toBeTranslated) {
  var numChars = toBeTranslated.length
  var currentChar
  var translatedText = ''
  
  function isVowel (char) {
    return /[aeiou]/.test(char.toLowerCase())
  }
  
  function isSpecialChars (char) {
    return /[ ,*]/.test(char)
  }

  for (var i = 0; i < numChars; i++) {
    currentChar = toBeTranslated[i]
    if (!isVowel(currentChar) && !isSpecialChars(currentChar)){
      translatedText += currentChar + 'o' + currentChar
    }

    retun translatedText
  }
}



