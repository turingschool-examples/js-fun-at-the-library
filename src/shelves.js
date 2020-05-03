function addBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book)
  }
  else {
    return [book]
  }
}

function removeBook(name, shelf) {
  shelf.splice(shelf.findIndex(book => book.title === name), 1);
}

module.exports = {
  addBook: addBook,
  removeBook: removeBook
}