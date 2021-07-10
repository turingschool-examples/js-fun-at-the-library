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


function addBook(library, bookToAdd) {
    var shelf = bookToAdd.genre;
    if (shelf === library.shelves["shelf"]) {
      library.shelves.shelf.push(bookToAdd);
    }
    return library;
};

module.exports = {
  createLibrary,
  addBook,
  // checkoutBook
};