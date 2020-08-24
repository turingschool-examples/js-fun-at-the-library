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

function checkoutBook(library, bookName) {
  for (var i = 0; i < library.shelves.fiction.length; i++) {
    if (bookName == library.shelves.fiction[i].title) {
      library.shelves.fiction.splice(i, 1);
      return `You have now checked out ${bookName} from the ${library.name}`;
    }
  }

  for (var i = 0; i < library.shelves.fantasy.length; i++) {
    if (bookName == library.shelves.fantasy[i].title) {
      library.shelves.fantasy.splice(i, 1);
      return `You have now checked out ${bookName} from the ${library.name}`
    }
  }

  for (var i = 0; i < library.shelves.nonFiction.length; i++) {
    if (bookName == library.shelves.nonFiction[i].title) {
      library.shelves.nonFiction.splice(i, 1);
      return `You have now checked out ${bookName} from the ${library.name}`
    }
  }

  return `Sorry, there are currently no copies of ${bookName} available at the ${library.name}`;
};

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
