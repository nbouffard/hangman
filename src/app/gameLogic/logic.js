let numOfMistakes = 7

const testFunction = () => 1

const words = ['duncan', 'mittens', 'coco', 'kenco', 'kitty', 'benji', 'mazikeen']

const getWord = (arrayOfWords = words, overridingWord) => {
  const randomIndex = Math.floor(Math.random() * arrayOfWords.length)
  return overridingWord || arrayOfWords[randomIndex];
}

const mistakeCounter = () => {
  return numOfMistakes
}

let selectedWord = getWord();

const hiddenWord = () => {
  const underscoreWord = selectedWord.split('').map(() => '_').join('')
  return underscoreWord
}

let correctLettersGuessed = hiddenWord()
// let selectedLetter = null

const isLetterOnBoard = (letter, myWord = selectedWord) => {
  // selectedLetter = letter
  return myWord.split('').includes(letter)
}

const checkLetter = (letter, myWord) => {
  if (isLetterOnBoard(letter, myWord)) {
    const index = myWord.indexOf(letter)
    const test = correctLettersGuessed.split('').toSpliced(index, 1, letter)
    return test.join('')
  }
  console.log('did not work')
}

export { testFunction, getWord, words, mistakeCounter, selectedWord, hiddenWord, checkLetter, isLetterOnBoard }


// if (myWord.split('').includes(letter)) {
//   let index = myWord.indexOf(letter)
//   correctLettersGuessed[index] = letter
// }
// console.log(correctLettersGuessed)
