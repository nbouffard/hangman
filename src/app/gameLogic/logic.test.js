import { expect, test } from 'vitest'
// import { render, screen } from '@testing-library/react'
import { testFunction, getWord, words, mistakeCounter, hiddenWord, selectedWord, checkLetter, isLetterOnBoard  } from "./logic"

test('it works', () => {
  expect(testFunction()).toBeDefined()
  expect(testFunction()).toBe(1)
})

test('#getWord - should select random word', () => {
  expect(getWord()).toBeDefined()
  expect(words).toContain(getWord())
  // expect(getWord(words)).toEqual(expect.any(words))
})

test('#mistakeCounter - Should have a default value of 7', () => {
  expect(mistakeCounter()).toBeDefined()
  expect(mistakeCounter()).toBe(7)
})

test("#hiddenWord - Length of '_' should match length of selectedWord", () => {
  expect(hiddenWord()).toBeDefined()
  expect(hiddenWord().length).toEqual(selectedWord.length)
})

test('#isLetterOnBoard - Should check if the letter is in the word', () => {
  const myWord = getWord(words, 'whatever')
  expect(isLetterOnBoard('w', myWord)).toBeDefined()
  expect(isLetterOnBoard('w', myWord)).toBe(true)
})

test('#isLetterOnBoard - Should check if the letter is NOT the word', () => {
  const myWord = getWord(words, 'whatever')
  expect(isLetterOnBoard('z', myWord)).toBeDefined()
  expect(isLetterOnBoard('z', myWord)).toBe(false)
})

test('#checkLetter - Should replace _ with letter if correct', () => {
  const myWord = getWord(words, 'whatever')
  expect(checkLetter('w', myWord)).toBeDefined()
  expect(checkLetter('w', myWord)).toBe('w_______')

})

test.skip('Should not add more letters to the board if game is lost', () => {
})

test.skip('Should not add more letters to the board if game is won', () => {
})

test.skip('Should check if the game has won', () => {
})

test.skip('New word should be selected if restart has been called', () => {
})
