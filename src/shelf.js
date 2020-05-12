function shelfBook(book, shelf) {
  if (shelf.length === 3) {
    return;
  }
  shelf.unshift(book);
}

function unshelfBook(title, shelf) {
  //Loop through books on shelf
  for (var i = 0; i < shelf.length; i++) {
    var book = shelf[i];
    //If book title matches given title
    if (book.title === title) {
      shelf.splice(i,1);
    }
  }
}

function listTitles(shelf) {
  var titles = [];
  for (var i = 0; i < shelf.length; i++) {
    var book = shelf[i];
    titles.push(book.title);
  }
  return titles.join(", ");
}

function searchShelf(shelf, title) {
  //loop through shelf to find title
  for (var i = 0; i < shelf.length; i++) {
    var book = shelf[i];
    if (book.title === title) {
      return true;
    }
  }
  return false;
  //return true or false
}

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
