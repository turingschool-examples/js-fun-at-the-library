function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book)
  }
  return shelf
}

function unshelfBook(bookTitle, shelf) {
 const bookIndex = shelf.findIndex(book => book.title == bookTitle)
 
 if (bookIndex != -1) {
  shelf.splice(bookIndex, 1)
 }
}

function listTitles(shelf) {
  arrayTitles = []
  shelf.forEach(book => {
    arrayTitles.push(book.title)
  });
  return arrayTitles.join(", ")
}

function searchShelf(shelf, bookTitle) {
  const bookIndex = shelf.findIndex(book => book.title == bookTitle)
 
 if (bookIndex != -1) {
  return true
 } else {
  return false
 }
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};