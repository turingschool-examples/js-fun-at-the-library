// Function that creates a library.
// function createLibrary(libraryName) {
//     var library = {
//       name: libraryName,
//       shelves: {
//         fantasy: [],
//         fiction: [],
//         nonFiction:[],
//       }
//     }
//     return library;
// };

const createLibrary = (libraryName) => ({name:libraryName, 
  shelves: {
    fantasy: [],
    fiction: [],
    nonFiction: [],
  }})

// Function adds a book to a library on a specific shelf
// function addBook(library, bookToAdd) {
//     var shelf = bookToAdd.genre;
//     for (var key in library.shelves) {
//       if (key === shelf) {
//         library.shelves[shelf].unshift(bookToAdd);
//       };
//     };
// };

const addBook = (library, book) => {
  if (book.genre === 'fantasy') {
    library.shelves.fantasy.unshift(book)
  } else if (book.genre === 'fiction') {
    library.shelves.fiction.unshift(book)
  } else if (book.genre === 'nonFiction') {
    library.shelves.nonFiction.unshift(book)
  };
};

//Function that checks out a book if is on a shelf.
// function checkoutBook(library, bookTitle, genre) {
//     var findShelf = library.shelves[genre];
//     for (var i = 0; i < findShelf.length; i++) {
//         if (findShelf[i].title === bookTitle) {
//           findShelf.splice(i, 1);
//           return `You have now checked out ${bookTitle} from the ${library.name}`
//         } 
//     }
//       return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`;
// };

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