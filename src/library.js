
function createLibrary(name) {
  return {
    name: name,
    shelves: {
      fantasy: [],
      nonFiction: [],
      fiction: []
    }
  }
}

function addBook(library, book) {
  var genre = book.genre;
  if(!library.shelves[genre]) {
    library.shelves[genre] = []
  }
  library.shelves[genre].push(book);
}

function checkoutBook(library, bookTitle, genre) {
  if(library.shelves[genre]) {
    var shelf = library.shelves[genre];
    for(var i = 0; i < shelf.length; i++) {
      if(shelf[i].title === bookTitle) {
        var verified = shelf.splice(i, 1)[0];
        return `You have now checked out ${verified.title} from the ${library.name}.`
      }
    }
    return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}.`
  }
  else {
    return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}.`
  }
}

function takeStock(library, genre) {
  if(library.shelves[genre] ) {
    var numberOfBooks = library.shelves[genre].length
    return `There are a total of ${numberOfBooks} ${genre} books at the ${library.name}.`
  }
  else {
    var totalBooks = library.shelves.fantasy.length + library.shelves.nonFiction.length + library.shelves.fiction.length
    return `There are a total of ${totalBooks} books at the ${library.name}.`
  }
}



module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};