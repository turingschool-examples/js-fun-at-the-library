function shelfBook(book, shelf) {
  // push doesn't work, but unshift does? not sure why
  // console.log(shelf);
  if (shelf.length < 3) {
  shelf.unshift(book);
  } else {
    return `This shelf is full!`;
  };
};

// shelfBook();

function unshelfBook(book, shelf) {
// should remove a book by name
  shelf.splice(1, 1);
  // console.log(shelf);
};

// unshelfBook();

function listTitles(shelf) {
  // create a list of all items in an array
  var bookTitles = []
  for ( i = 0; i < shelf.length; i++) {
    bookTitles.push(shelf[i].title);
  }
  // console.log(bookTitles);
  return bookTitles.join(`, `);
};

// listTitles();

function searchShelf(shelf, bookTitle) {
  // if title is on the shelf, return true; otherwise, return false
  var onShelf = [];
  for (i = 0; i < shelf.length; i++) {
    onShelf.push(shelf[i].title);
  };
  if (onShelf.includes(bookTitle)) {
    return true
    } else {
    return false
  };
};
//     if (bookTitles.length = bookTitle) {
//       console.log(onShelf);
//       return onShelf;
//     } else {
//       return `Sorry, we don't have that one today.`
//     };
//   };
// };

// searchShelf();

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
