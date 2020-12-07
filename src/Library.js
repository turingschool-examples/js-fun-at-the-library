function createLibrary(libraryName) {
  var library = {
    name: `${libraryName}`,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return library;
};

function addBook(libraryName, book) {
  createLibrary(libraryName);
  libraryName.shelves[book.genre].push(book);
};

function checkoutBook(libraryName, book, genre) {
  var booksOnShelf = libraryName.shelves[genre].length;
  if (booksOnShelf === 0) {
    var statement = `Sorry, there are currently no copies of ${book} available at the ${libraryName.name}`
  } else if(libraryName.shelves[genre][0].title === book) {
    var statement = `You have now checked out ${book} from the ${libraryName.name}`
    libraryName.shelves[genre].pop()
  } else {
    var statement = `Sorry, there are currently no copies of ${book} available at the ${libraryName.name}`
  }
  return statement;
};

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
