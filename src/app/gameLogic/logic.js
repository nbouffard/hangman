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

const checkLetter = (letter, myWord = selectedWord) => {
  return myWord.split('').includes(letter)
}

export { testFunction, getWord, words, mistakeCounter, selectedWord, hiddenWord, checkLetter }
