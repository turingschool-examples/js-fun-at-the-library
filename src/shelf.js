// ---Commit out is Mod1 code.---

// function shelfBook(book, shelf) {
//   if (shelf.length < 3) {
//     shelf.unshift(book);
//   } else {
//     return shelf;
//   }
// }

const shelfBook = (book, shelf) => {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
}

// function unshelfBook(book, shelf) {
//   for (var i = 0; i < shelf.length; i++) {
//     if (shelf[i].title === book) {
//       shelf.splice(i, 1);
//     }
//   }
// }

const unshelfBook = (book, shelf) => {
  var foundIndex = shelf.findIndex((bookToRemove) => {
    return bookToRemove.title === book;
  })
  if (foundIndex) {
    shelf.splice(foundIndex, 1);
  }
}

// function listTitles(shelf) {
//   var titles = "";
//   for (var i = 0; i < shelf.length; i++) {
//     if (i !== 2) {
//       titles += `${shelf[i].title}, `;
//     } else {
//       titles += `${shelf[i].title}`;
//     }
//   }
//   return titles;
// }

const listTitles = shelf => {
  const bookTitles = shelf.map(book => book.title);
  return bookTitles.join(', ');
}

// function searchShelf(shelfOn, titleNeeded) {
//   if (titleNeeded === shelfOn[0].title) {
//     return true;
//   } else if (titleNeeded === shelfOn[1].title) {
//     return true;
//   }  else {
//     return false;
//   }
// }

const searchShelf = (shelf, titleNeeded) => {
  const bookTitles = shelf.map(book => book.title);
  if (bookTitles.includes(titleNeeded) === true) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
