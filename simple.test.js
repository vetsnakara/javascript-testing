const { add, subtract } = require('./math')

test('7 + 3 = 10', () => {
  let result = add(7, 3)
  let expected = 10
  expect(result).toBe(expected)
})

test('7 - 3 = 4', () => {
  result = subtract(7, 3)
  expected = 4
  expect(result).toBe(expected)
})