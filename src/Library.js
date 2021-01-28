// ---Commit out is Mod1 code.---

// function createLibrary(newLibrary) {
//   var libraryData = {
//     name: newLibrary,
//     shelves: {
//       fantasy: [],
//       fiction: [],
//       nonFiction: [],
//     },
//   };
//   return libraryData;
// }

const createLibrary = (library) => ({
  name: library,
  shelves: {
    fantasy: [],
    fiction: [],
    nonFiction: [],
  },
})

// function addBook(libraryName, bookToAdd) {
//   if ("fantasy" === bookToAdd.genre) {
//     libraryName.shelves.fantasy.push(bookToAdd);
//   } else if ("fiction" === bookToAdd.genre) {
//     libraryName.shelves.fiction.push(bookToAdd);
//   } else {
//     libraryName.shelves.nonFiction.push(bookToAdd);
//   }
// }

const addBook = (library, book) => library.shelves[book.genre].push(book);

// function checkoutBook(libraryName, toTakeOut, genre) {
//   if (genre === "fantasy") {
//     for (var i = 0; i < libraryName.shelves.fantasy.length; i++) {
//       if (libraryName.shelves.fantasy[i].title === toTakeOut) {
//         libraryName.shelves.fantasy.splice(i, 1);
//         return `You have now checked out ${toTakeOut} from the ${libraryName.name}`;
//       }
//     }
//     return `Sorry, there are currently no copies of ${toTakeOut} available at the ${libraryName.name}`;
//   } else if (genre === "fiction") {
//     for (var i = 0; i < libraryName.shelves.fiction.length; i++) {
//       if (libraryName.shelves.fiction[i].title === toTakeOut) {
//         libraryName.shelves.fiction.splice(i, 1);
//         return `You have now checked out ${toTakeOut} from the ${libraryName.name}`;
//       }
//     }
//     return `Sorry, there are currently no copies of ${toTakeOut} available at the ${libraryName.name}`;
//   } else if (genre === "nonFiction") {
//     for (var i = 0; i < libraryName.shelves.nonFiction.length; i++) {
//       if (libraryName.shelves.nonFiction[i].title === toTakeOut) {
//         libraryName.shelves.nonFiction.splice(i, 1);
//         return `You have now checked out ${toTakeOut} from the ${libraryName.name}`;
//       }
//     }
//   } else {
//     return `Sorry, there are currently no copies of ${toTakeOut} available at the ${libraryName.name}`;
//   }
// }

function checkoutBook(library, bookTitle, bookGenre) {
  var foundBook = library.shelves[bookGenre].findIndex((bookToRemove) => {
    return bookToRemove.title === bookTitle;
  })
  if (foundBook !== -1) {
    library.shelves[bookGenre].splice(foundBook, 1);
    return `You have now checked out ${bookTitle} from the ${library.name}`;
  } else {
    return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`;
  }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
