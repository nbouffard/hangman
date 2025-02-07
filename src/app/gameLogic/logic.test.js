import { expect, test } from 'vitest'
// import { render, screen } from '@testing-library/react'
import { testFunction } from "./logic"

test('it works', () => {
  expect(testFunction()).toBeDefined()
  expect(testFunction()).toBe(1)
})

test.skip('it works', () => {
})
