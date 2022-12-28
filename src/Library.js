
function createLibrary(name){
  library = {name: name, shelves: {fantasy:[], fiction: [], nonFiction:[]}}
  return library
}

function addBook(library, book) {
  for (let key in library.shelves){
    if (book.genre == key) {
      library.shelves[key].push(book)
    }
  }
}

function checkoutBook(library, bookname, genre) {
  for (let i=0; i < library.shelves[genre].length; i++){
    if (library.shelves[genre][i].title == bookname) {
      library.shelves[genre].splice(i, 1)
      return `You have now checked out ${bookname} from the ${library.name}`
    }
  }
  return `Sorry, there are currently no copies of ${bookname} available at the ${library.name}`
}
module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};