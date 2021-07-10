// Function that creates a library.
function createLibrary(libraryName) {
    var library = {
      name: libraryName,
      shelves: {
        fantasy: [],
        fiction: [],
        nonFiction:[],
      }
    }
    return library;
};

// Function adds a book to a library on a specific shelf
function addBook(library, bookToAdd) {
    var shelf = bookToAdd.genre;
    for (var key in library.shelves) {
      if (key === shelf) {
        library.shelves[shelf].unshift(bookToAdd);
      };
    };
};

module.exports = {
  createLibrary,
  addBook,
  // checkoutBook
};