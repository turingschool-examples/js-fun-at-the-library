//     checkoutBook
//       - should unshelf a book to check out a book to a patron
//       - should only checkout a book if the book is on the shelves

function createLibrary(name) {
  var denverLibrary = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return denverLibrary;
};

function addBook(library, book) {
if (book.genre === "fantasy") {
  library.shelves.fantasy.push(book)
} else if (book.genre === "fiction") {
  library.shelves.fiction.push(book)
} else {
  library.shelves.nonFiction.push(book)
}
return library
};

function checkoutBook(library, book) {
for (i = 0; i < library.shelves.fantasy.length; i++){
  if (library.shelves.fantasy[i].title === book ) {
    return `You have now checked out ${book} from the ${library.name}`
  }
}
  for (i = 0; i < library.shelves.fiction.length; i++){
    if (library.shelves.fiction[i].title === book ) {
      return `You have now checked out ${book} from the ${library.name}`
}
}
for (i = 0; i < library.shelves.nonFiction.length; i++){
  if (library.shelves.nonFiction[i].title === book ) {
    return `You have now checked out ${book} from the ${library.name}`
  }
}
  return `Sorry, there are currently no copies of ${book} available at the ${library.name}`
};

module.exports = {

  createLibrary,
  addBook,
  checkoutBook
};
