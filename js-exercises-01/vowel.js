// isVowel() function

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise

// using includes method
function isVowel3 (char) {
  var vowels = ['a', 'e', 'i', 'o', 'u']
  if (vowels.includes(char)) {
    return true
  } else {
    return false
  }
}

isVowel3()

// using 'indexOf' method
function isVowel4 (char) {
  var vowels = ['a', 'e', 'i', 'o', 'u']
  if (vowels.indexOf(char) !== -1) {
    return true
  } else {
    return false
  }
}

isVowel4()

// ---------------------------------
function isVowel (char) {
  switch (char) {
    case 'a':
      return true
      break
    case 'e':
      return true
      break
    case 'i':
      return true
      break
    case 'o':
      return true
      break
    case 'u':
      return true
      break
    default:
      return false
      break
  }
}

isVowel()

// ----------------

function isVowel2 (char) {
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    return true
  } else {
    return false
  }
}

isVowel2()

// -------------------------

