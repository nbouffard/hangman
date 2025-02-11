let selectedWord;
let guessedWord;
let numOfMistakes;
const words = ['duncan', 'mittens', 'coco', 'kenco', 'kitty', 'benji', 'mazikeen']

const testFunction = () => 1

const createSelectedWord = (arrayOfWords, overridingWord) => {
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

const isLetterInWord = (letter) => {
  return selectedWord.split('').includes(letter)
}

const updateGuessedWord = (letter) => {
  const indexes = []
  selectedWord.split('').forEach((l, index) => {
    if (l === letter) {
      indexes.push(index)
    }
  })
  indexes.forEach((i) => {
    guessedWord = guessedWord.split('').toSpliced(i, 1, letter).join('')
  })
  return guessedWord
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

export { testFunction, words, mistakeCounter, selectedWord, checkLetter, isLetterInWord, start, createGuessedWord, createSelectedWord, guessedWord, updateGuessedWord, checkGame, numOfMistakes, restart }
