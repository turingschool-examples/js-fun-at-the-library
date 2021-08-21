const createLibrary = (libraryName) => (
  {
    name:libraryName, 
    shelves: {
    fantasy: [],
    fiction: [],
    nonFiction: [],
  }
})

const addBook = (library, book) => {
  let shelvesObject = Object.keys(library.shelves);
  shelvesObject.find(shelf => (book.genre === shelf) && library.shelves[shelf].unshift(book)); 
};

const checkoutBook = (library, bookTitle, genre) => {
  let findShelf = library.shelves[genre];
  let confirmation = `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`;
  
  findShelf.forEach((element, index) => {
    if (element.title === bookTitle) {
      findShelf.splice(index, 1);
      confirmation = `You have now checked out ${bookTitle} from the ${library.name}`;
    };  
  });
  return confirmation;
};

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};