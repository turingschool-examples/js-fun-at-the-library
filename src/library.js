function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return library
}

function addBook(library, book) {
  var genre = book.genre
      return library.shelves[genre].push(book)
    }
 


module.exports = {
  createLibrary,
  addBook,
  // checkoutBook,
  // takeStock
};