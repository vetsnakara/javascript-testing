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

async function test(title, callback) {
  try {
    await callback()
    console.log(`🗸 ${title}`)
  } catch (error) {
    console.error(error)
    console.error(`╳ ${title}`)
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    }
  }
}