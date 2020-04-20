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

global.test = test
global.expect = expect

/**
 * Usage:
 * node --require ./setup-globals testFile.js
 */