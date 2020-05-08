function createLibrary(name) {
  return {
    libraryName: name, 
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  };
}

function addBook(libraryName, {book}) {
  libraryName.shelves.genre.push({book})

}


module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  // checkoutBook: checkoutBook
};




// //  #3

// //  npm test test/library-test.js