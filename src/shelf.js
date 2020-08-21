function shelfBook(book, sciFiShelf) {
  sciFiShelf.unshift(book);
};

module.exports = {
  shelfBook: shelfBook,
  // unshelfBook: unshelfBook,
  // listTitles: listTitles,
  // searchShelf: searchShelf
};
