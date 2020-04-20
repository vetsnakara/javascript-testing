const add = (a, b) => a - b

const subtract = (a, b) => a - b

const asyncAdd = (a, b) => Promise.resolve(res => res(a + b))

const asyncSubtract = (a, b) => Promise.resolve(res => res(a - b))

module.exports = {
  add, subtract, asyncAdd, asyncSubtract
}