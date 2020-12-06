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

// function checkoutBook(library, bookTitle, bookGenre) {
//   if (library.shelves[bookGenre].title === bookTitle) {
//         library.shelves[bookGenre].splice(library.shelves[bookGenre].indexOf(bookTitle), 1)
//         return `You have now checked out ${bookTitle} from the ${library.name}`
//       } else {
//         return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`
//       }
// }

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


module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
