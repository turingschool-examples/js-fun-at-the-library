function createLibrary(name) {
  return {
    name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
}

function addBook(library, book) {
  Object.entries(library.shelves).forEach(function ([key, value]) {
    if (key === book.genre) {
      value.push(book)
    }
  })
  return library
}

function checkoutBook(library, bookTitle, genre) {
  // Object.entries(library.shelves).forEach(function ([key, value]) {
  //   if (key === genre) {
  //     value.forEach(book => {
  //       bookIndex = value.findIndex(book => book.title === bookTitle)

  //       if (bookIndex != -1) {
  //         value.splice(bookIndex, 1)
  //         result = `You have now checked out ${bookTitle} from the ${library.name}.`
  //         // bookFound = true;
  //         return;
  //        } else if (!bookIndex) {
  //         result = `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}.`
  //       }
  //     });

  //     // if (!bookFound) {
  //       // result = `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}.`
  //     // }
  //   }
  // })
  // return result

  if (library.shelves[genre].length > 0) {
    for (i = 0; i < library.shelves[genre].length; i++) {
      if (library.shelves[genre][i].title === bookTitle) {
        library.shelves[genre].splice(i, 1);
        return `You have now checked out ${bookTitle} from the ${library.name}.`
      }
    }
  } else {
    return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}.`
  }
}

function takeStock(library, genre) {
  if (genre != undefined) {
    genreBooks = library.shelves[genre].length
    return `There are a total of ${genreBooks} ${genre} books at the ${library.name}.`
  } else {
    fantasyBooks = library.shelves.fantasy.length
    fictionBooks = library.shelves.fiction.length
    nonFictionBooks = library.shelves.nonFiction.length
    totalBooks = fantasyBooks + fictionBooks + nonFictionBooks;
    return `There are a total of ${totalBooks} books at the ${library.name}.`
  }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};