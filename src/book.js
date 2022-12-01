function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(name, age, pronouns) {
    return {
  name: name,
  age: age,
  pronouns: pronouns
  }
}

function saveReview() {

}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  // editBook
}

// npm test test/book-test.js