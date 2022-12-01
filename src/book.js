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

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20
  }
  
  function writeBook(newBook, newCharacter, newType) {
    return {
      titles: newBook,
      mainCharacter: newCharacter,
      pageCount: calculatePageCount(newBook),
      type: newType
    }
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