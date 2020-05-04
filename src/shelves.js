function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book)
  }
  else {
    return [book]
  }
}

function unshelfBook(name, shelf) {
  shelf.splice(shelf.findIndex(book => book.title === name), 1);
}

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook
}