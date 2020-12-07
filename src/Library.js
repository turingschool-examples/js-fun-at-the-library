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
  library.shelves[book.genre].push(book)
}

function checkoutBook(library, bookTitle, bookGenre) {
  for (i = 0; i < library.shelves[bookGenre].length; i++) {
    var isAvailable = null
    if (library.shelves[bookGenre][i].title === bookTitle) {
      library.shelves[bookGenre].splice(i, 1)
      isAvailable = true
    } else {
      isAvailable = false
    }
  }
    if (isAvailable === true) {
      return `You have now checked out ${bookTitle} from the ${library.name}`
    } else {
      return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`
    }
  }

// Just something to revisit later, this was the code I originally tried to pass through the for loop and continued to return undefined instead of the notAvailable string
//     if (library.shelves[bookGenre][i].title === bookTitle) {
//         library.shelves[bookGenre].splice(i, 1)
//         return `You have now checked out ${bookTitle} from the ${library.name}`
//     } else {
//         return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`
//     }


module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
