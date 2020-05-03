function addBook(book, catalog) {
  catalog.push(book)
}

function removeBook(book, catalog) {
  catalog.splice(catalog.indexOf(book), 1)
}

function addManyBooks(books, catalog) {
  catalog.push(...books)
}

function alphabetizeBooks(catalog) {
  catalog.sort()
}

module.exports = {
  addBook: addBook,
  removeBook: removeBook,
  addManyBooks: addManyBooks,
  alphabetizeBooks: alphabetizeBooks
}