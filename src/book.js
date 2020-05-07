function createTitle(bookTitle) {
  return `The ${bookTitle}`;
}

function buildMainCharacter(name, age, pronouns) {
  return {name, age, pronouns}
}

function saveReview(review, reviews) {
  if (!reviews.includes(review)) {
    reviews.push(review)
  }
}

function calculatePageCount(bookTitle) {
  var bookPageCount = bookTitle.length * 20;
  return bookPageCount
}

function writeBook(title, mainCharacter, genre) {
  var book = {title, mainCharacter, genre}
  book.pageCount = calculatePageCount(title);
  return book
}

function editBook(book) {
  book.pageCount = book.pageCount * .75;
  return book.pageCount
}

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
