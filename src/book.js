function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name,
    age,
    pronouns
  }
}

function saveReview(review, reviewArray) {
  if (reviewArray.includes(review) == false) {
    reviewArray.push(review)
  }
  return reviewArray
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20
}

function writeBook(bookTitle, bookCharacter, genre) {
  return  {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre
  }
}

function editBook(book) {
  book.pageCount = Math.round(book.pageCount * 0.75);
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}