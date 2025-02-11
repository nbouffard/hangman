import { expect, test } from 'vitest'
// import { render, screen } from '@testing-library/react'
import { testFunction, words, selectedWord, checkLetter, isLetterInWord, createSelectedWord, createGuessedWord, guessedWord, start, updateGuessedWord, checkGame, numOfMistakes } from "./logic"

test('it works', () => {
  expect(testFunction()).toBeDefined()
  expect(testFunction()).toBe(1)
})

test('#createSelectedWord - should create a random word', () => {
  // start()
  expect(createSelectedWord(words)).toBeDefined()
  expect(words).toContain(createSelectedWord(words))
  // expect(getWord(words)).toEqual(expect.any(words))
})

test("#createGuessedWord - Length of '_' should match length of createSelectedWord", () => {
  start()
  expect(createGuessedWord(selectedWord)).toBeDefined()
  expect(guessedWord.length).toEqual(selectedWord.length)
})

test('#isLetterInWord - Should check if the letter is in the word', () => {
  start(words, 'whatever')
  expect(isLetterInWord('w')).toBeDefined()
  expect(isLetterInWord('w')).toBe(true)
})

test('#isLetterInWord - Should check if the letter is NOT the word', () => {
  start(words, 'whatever')
  expect(isLetterInWord('z')).toBeDefined()
  expect(isLetterInWord('z')).toBe(false)
})

test('#updateGuessedWord - Should replace _ with letter if correct', () => {
  start(words, 'whatever')
  expect(updateGuessedWord('e')).toBeDefined()
  expect(updateGuessedWord('e')).toBe('____e_e_')
})

test('#checkLetter - Should replace _ with letter if correct', () => {
  start(words, 'whatever')
  expect(checkLetter('e')).toBeDefined()
  expect(checkLetter('e')).toBe('____e_e_')
})

test('#checkLetter - Should return number of mistakes if letter is incorrect', () => {
  start(words, 'whatever')
  expect(checkLetter('e')).toBeDefined()
  expect(checkLetter('f')).toBe(6)
  expect(checkLetter('f')).toBe(5)
})

test('#checkGame - Should not add more letters to the board if game is lost', () => {
  start(words, 'book')
  checkLetter('a')
  checkLetter('b')
  checkLetter('o')
  checkLetter('k')
  expect(checkGame()).toBeDefined()
  expect(numOfMistakes).toBe(6)
})

test('#checkGame - Should not add more letters to the board if game is won', () => {
  start(words, 'book')
  checkLetter('a')
  checkLetter('b')
  checkLetter('f')
  checkLetter('k')
  checkLetter('z')
  checkLetter('w')
  checkLetter('i')
  checkLetter('p')
  checkLetter('r')
  checkLetter('o')
  expect(checkGame()).toBeDefined()
  expect(guessedWord).toBe('b__k')
})

test('#checkGame - Should check if the game has won', () => {
  start(words, 'book')
  checkLetter('a')
  checkLetter('b')
  checkLetter('o')
  checkLetter('k')
  expect(checkGame()).toBeDefined()
  expect(checkGame()).toBe('win')
})

test('#checkGame - Should check if the game has lost', () => {
  start(words, 'book')
  checkLetter('a')
  checkLetter('b')
  checkLetter('f')
  checkLetter('k')
  checkLetter('z')
  checkLetter('w')
  checkLetter('i')
  checkLetter('p')
  checkLetter('r')
  expect(checkGame()).toBeDefined()
  expect(checkGame()).toBe('lost')
})

test('restarting should create a new word, data should be reset', () => {
  start(words, 'book')
  checkLetter('a')
  checkLetter('b')
  expect(selectedWord).toBe('book')
  expect(numOfMistakes).toBe(6)
  expect(guessedWord).toBe('b___')
  start(words, 'clock')
  checkLetter('o')
  checkLetter('k')
  expect(selectedWord).toBe('clock')
  expect(numOfMistakes).toBe(7)
  expect(guessedWord).toBe('__o_k')
})
