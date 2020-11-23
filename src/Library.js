function createLibrary(name) {
  return {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
};

function addBook(library, book) {
  library.shelves[book.genre].push(book);
};

function checkoutBook(libObj, bookName) {
  for (var keys in libObj.shelves) {
    for (var i = 0; i < libObj.shelves[keys].length; i++) {
      if (bookName === libObj.shelves[keys][i].title) {
        libObj.shelves[keys].splice(i, 1);
        return `You have now checked out ${bookName} from the ${libObj.name}`
      }
    }
  }
  return `Sorry, there are currently no copies of ${bookName} available at the ${libObj.name}`
};

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
