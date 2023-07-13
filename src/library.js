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
  var shelves = library.shelves
  var totalBooks = []

  if (genre) {
    return `There are a total of ${shelves[genre].length} ${genre} books at the ${library.name}.`
  } else {
    totalBooks.push(shelves.fantasy)
    totalBooks.push(shelves.fiction)
    totalBooks.push(shelves.nonFiction)
  } return `There are a total of ${totalBooks.length} books at the ${library.name}.`
}

  // PSUEDOCODE FOR ABOVE: create object.keys with shelves, library.shelves, should return array of each genre, loop through array, for each loop bracket notation library.shelves with all of the keys to get access to the books, return that as number, .length gives length of arrays, then add them together to get total # of books, each key is a replacement for line 34, same thing but with keys

  // CODE THAT DIDN'T WORK:
  // if (genre === undefined) {
  // console.log(library)
  // var shelves = library.shelves[genre]
  // console.log(shelves)
  // var num = shelves.length;
  //   for (var i = 0; i < shelves.length; i++) {
  //     if (shelves[i].genre === genre) {
  //       return `There are a total of ${num} ${genre} books at the ${library.name}.`
  //     }
  // }
        // return `There are a total of ${num} books at the ${library.name}.`

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};