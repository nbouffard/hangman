import { expect, test } from 'vitest'
// import { render, screen } from '@testing-library/react'
import { testFunction } from "./logic"

test('it works', () => {
  expect(testFunction()).toBeDefined()
  expect(testFunction()).toBe(1)
})

test.skip('should select random word', () => {
})

test.skip('Should have a default value of 7', () => {
})

test.skip("Length of '_' should match length of word", () => {
})

test.skip('Should check if the letter is in the word', () => {
})

test.skip('Should check if the letter is NOT the word', () => {
})

test.skip('Should not add more letterd to the board if game is lost', () => {
})

test.skip('Should not add more letters to the board if game is won', () => {
})

test.skip('Should check if the game has won', () => {
})

test.skip('New word should be selected if restart has been called', () => {
})
