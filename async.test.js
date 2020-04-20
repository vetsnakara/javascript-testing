const { asyncAdd, asyncSubtract } = require('./math')

test('7 + 3 = 10', async () => {
  let result = await asyncAdd(7, 3)
  let expected = 10
  expect(result).toBe(expected)
})

test('7 - 3 = 4', async () => {
  result = await asyncSubtract(7, 3)
  expected = 4
  expect(result).toBe(expected)
})