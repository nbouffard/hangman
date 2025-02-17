let selectedWord;
let guessedWord;
let numOfMistakes;
const words = ['duncan', 'mittens', 'coco', 'kenco', 'kitty', 'benji', 'mazikeen']

const testFunction = () => 1

const createSelectedWord = (arrayOfWords = words, overridingWord) => {
  const randomIndex = Math.floor(Math.random() * arrayOfWords.length)
  return overridingWord || arrayOfWords[randomIndex];
}

const createGuessedWord = (word) => {
  return word.split('').map(() => '_').join('')
}

const start = (arrayOfWords = words, overridingWord) => {
  selectedWord = createSelectedWord(arrayOfWords, overridingWord);
  guessedWord = createGuessedWord(selectedWord)
  numOfMistakes = 7
}

const isLetterInWord = (letter, word = selectedWord) => {
  return word.split('').includes(letter)
}

const updateGuessedWord = (letter, gWord = guessedWord, sWord = selectedWord) => {
  const indexes = []
  sWord.split('').forEach((l, index) => {
    if (l === letter) {
      indexes.push(index)
    }
  })
  indexes.forEach((i) => {
    gWord = gWord.split('').toSpliced(i, 1, letter).join('')
  })
  // console.log(gWord)
  guessedWord = gWord
  return gWord
}

const checkLetter = (letter) => {
  if (numOfMistakes > 0 && guessedWord !== selectedWord) {
    if (isLetterInWord(letter)) {
      return updateGuessedWord(letter)
    } else {
      numOfMistakes -= 1
      return numOfMistakes
    }
  }
}

const checkGame = () => {
  if (guessedWord === selectedWord && numOfMistakes > 0) {
    return 'win'
  } else if (guessedWord !== selectedWord && numOfMistakes > 0){
    return 'again'
  } else {
    return 'lost'
  }
}

export { testFunction, words, selectedWord, checkLetter, isLetterInWord, start, createGuessedWord, createSelectedWord, guessedWord, updateGuessedWord, checkGame, numOfMistakes }
