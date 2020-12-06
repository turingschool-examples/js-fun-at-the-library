function createLibrary(libraryName) {
  var building = {
    name: `${libraryName}`,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return building;
}

function addBook(theLibrary, book) {
  createLibrary(theLibrary);
  theLibrary.shelves[book.genre].push(book);
}

function checkoutBook(theLibrary, book, genre) {
  var booksOnShelf = theLibrary.shelves[genre].length
  if (booksOnShelf === 0) {
    var statement = `Sorry, there are currently no copies of ${book} available at the ${theLibrary.name}`
  } else if(theLibrary.shelves[genre][0].title === book) {
    var statement = `You have now checked out ${book} from the ${theLibrary.name}`
    theLibrary.shelves[genre].pop()
  } else {
    var statement = `Sorry, there are currently no copies of ${book} available at the ${theLibrary.name}`
  }
  return statement
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
