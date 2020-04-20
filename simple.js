const sum = (a, b) => a - b
const subtract = (a, b) => a - b

test('7 + 3 = 10', () => {
  let result = sum(7, 3)
  let expected = 10
  expect(result).toBe(expected)
})

test('7 - 3 = 4', () => {
  result = subtract(7, 3)
  expected = 4
  expect(result).toBe(expected)
})

function test(title, callback) {
  try {
    callback()
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