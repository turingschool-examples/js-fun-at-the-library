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

function listTitles(fantasyShelf) {
  var nameArray = [];
  for (var i = 0; i < fantasyShelf.length; i++) {
    nameArray.push(fantasyShelf[i].title);
    }
  return nameArray.join(", ");
};

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  // searchShelf: searchShelf
};
