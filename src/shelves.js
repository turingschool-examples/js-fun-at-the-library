function addBook(book, shelf) {
  shelf.push(book);
  return shelf
}

function removeBook(book, shelf) {
  shelf.splice(shelf.indexOf(book), 1);
  return shelf
}

function addManyBooks(books, shelf) {
  return shelf.concat(books)
}

function organizeShelf(books) {
  return books.sort()
}

module.exports = {
  addBook,
  removeBook,
  addManyBooks,
  organizeShelf
}