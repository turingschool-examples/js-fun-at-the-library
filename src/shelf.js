function shelfBook(book, sciFiShelf) {
  if (3 <= sciFiShelf.length) {
    return sciFiShelf;
  }else {
    return sciFiShelf.unshift(book);
  }
};

function unshelfBook(name, sciFiShelf) {
  for (var i = 0; i < sciFiShelf.length; i++) {
    if (name === sciFiShelf[i].title) {
      return sciFiShelf.splice(i, 1);
    }
  }
};

function listTitles(shelf) {
  var nameArray = [];
  for (var i = 0; i < shelf.length; i++) {
    nameArray.push(shelf[i].title);
    }
  return nameArray.join(", ");
};

function searchShelf(shelf, title) {
  return listTitles(shelf).indexOf(title) >= 0;
} 

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
