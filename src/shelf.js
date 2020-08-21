function shelfBook(book, sciFiShelf) {
  if (3 <= sciFiShelf.length) {
    return sciFiShelf;
  }else {
    return sciFiShelf.unshift(book);
  }
};


module.exports = {
  shelfBook: shelfBook,
  // unshelfBook: unshelfBook,
  // listTitles: listTitles,
  // searchShelf: searchShelf
};
