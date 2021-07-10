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

//Function that checks out a book if is on a shelf.
function checkoutBook(library, bookTitle, genre) {
    var findShelf = library.shelves[genre];
    for (var i = 0; i < findShelf.length; i++) {
        if (findShelf[i].title === bookTitle) {
          findShelf.splice(i, 1);
          return `You have now checked out ${bookTitle} from the ${library.name}`
        } 
    }
      return `Sorry, there are currently no copies of ${bookTitle} available at the Denver Public Library`;
};

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};