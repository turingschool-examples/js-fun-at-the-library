function addTitle(book, catalog) {
  catalog.push(book)
}

function removeTitle(book, catalog) {
  catalog.splice(catalog.indexOf(book), 1)
}

function addManyTitles(books, catalog) {
  catalog.push(...books)
}

function alphabetizeTitles(catalog) {
  catalog.sort()
}

module.exports = {
  addTitle: addTitle,
  removeTitle: removeTitle,
  addManyTitles: addManyTitles,
  alphabetizeTitles: alphabetizeTitles
}