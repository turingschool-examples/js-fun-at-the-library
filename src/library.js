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
  var genre = book.genre
      return library.shelves[genre].push(book)
    }
 
function checkoutBook(library, title, genre) {
  var shelves = library.shelves[genre];
    for (var i = 0; i < shelves.length; i++) {
      if (shelves[i].title === title) {
        shelves.splice(i, 1);
        return `You have now checked out ${title} from the ${library.name}.`;
      }
  }
        return `Sorry, there are currently no copies of ${title} available at the ${library.name}.`;
}

function takeStock(library, genre) {
  var shelves = library.shelves[genre]
  var num = library.shelves.length;
    for (var i = 0; i < shelves.length; i++) {
      if (shelves[i].genre === genre) {
        return `There are a total of ${num} ${genre} books at the ${library.name}.`
      }
  }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};