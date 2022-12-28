function createTitle(title) {
  return 'The '+ title
}

function buildMainCharacter(name, age, pronouns) {
  character = {name: name, age: age, pronouns: pronouns}
  return character
}

function saveReview(newReview, reviews){
  if (reviews.indexOf(newReview) === -1) {
  reviews.push(newReview)
  }
  return reviews
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20
}

function writeBook(bookTitle, bookCharacter, genre){
  var book = {title: bookTitle, mainCharacter: bookCharacter,
              pageCount: calculatePageCount(bookTitle), genre: genre}
  return book
}

function editBook(book){
  book.pageCount = book.pageCount*3/4
  return book
}
module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}