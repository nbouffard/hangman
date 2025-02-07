import { expect, test } from 'vitest'
// import { render, screen } from '@testing-library/react'
import { testFunction, getWord, words, mistakeCounter, hiddenWord, selectedWord, checkLetter  } from "./logic"

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

test('#checkLetter - Should check if the letter is in the word', () => {
  const myWord = getWord(words, 'whatever')
  expect(checkLetter('w', myWord)).toBeDefined()
  expect(checkLetter('w', myWord)).toBe(true)
})

test('#checkLetter - Should check if the letter is NOT the word', () => {
  const myWord = getWord(words, 'whatever')
  expect(checkLetter('z', myWord)).toBeDefined()
  expect(checkLetter('z', myWord)).toBe(false)
})

test.skip('Should not add more letters to the board if game is lost', () => {
})

test.skip('Should not add more letters to the board if game is won', () => {
})

test.skip('Should check if the game has won', () => {
})

test.skip('New word should be selected if restart has been called', () => {
})
